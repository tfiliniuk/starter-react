import { store } from '../../redux/root.store';
import { toast } from 'react-toastify';
import axios from 'axios';
import { localStorageService } from '../helpers/localStorageService';
import { logout } from '../../redux/actions/auth.actions';

const refreshToken = localStorageService.getRefreshToken();

export const axiosBase = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: 'https://app-starter-node.herokuapp.com',
});

axiosBase.interceptors.request.use(
  function (request) {
    const accessToken = localStorageService.getAccessToken();
    if (accessToken) {
      request.headers['Authorization'] = 'Bearer ' + accessToken;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

axiosBase.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response.status === 401 &&
      originalRequest.url === '/auth/refresh-token'
    ) {
      store.dispatch(logout());
      return Promise.reject(error);
    }
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      return axiosBase
        .post('/auth/refresh-token', {
          refreshToken: refreshToken,
        })
        .then(
          (res) => {
            if (res.status === 201) {
              const { accessToken, refreshToken } = res.data;
              // 1) put token to LocalStorage
              localStorageService.setToken({
                accessToken,
                refreshToken,
              });
              // 2) Change Authorization header
              axiosBase.defaults.headers.common['Authorization'] =
                'Bearer ' + localStorageService.getAccessToken();
              // 3) return originalRequest object with Axios.
              return axiosBase(originalRequest);
            } else {
              console.log(res);
            }
          },
          (error) => {
            console.log(error);
            store.dispatch(logout());
          }
        );
    } else if (error.response.status === 400) {
      toast.error(error.response.data.error.message);
    } else {
      toast.error(error.response.data.error.message);
    }
    // return Error object with Promise
    return Promise.reject(error);
  }
);

function extractData(response) {
  toast.success(response.data.message);
  return response.data;
}

class ApiBase {
  get(url, params, headers = {}) {
    return axiosBase.get(url, { params, headers }).then((res) => {
      return extractData(res);
    });
  }
  post(url, body = null, headers = {}) {
    return axiosBase.post(url, body, { headers }).then((res) => {
      return extractData(res);
    });
  }
  put(url, body = null, headers = {}) {
    return axiosBase.put(url, body, { headers }).then((res) => {
      return extractData(res);
    });
  }
  delete(url, params, headers = {}) {
    return axiosBase.delete(url, { params, headers }).then((res) => {
      return extractData(res);
    });
  }
  file(url, body = null, headers = {}) {
    const formData = new FormData();
    formData.append('file', body);

    return axiosBase
      .post(url, formData, {
        // responseType: 'blob',
        headers: headers,
      })
      .then((res) => {
        return extractData(res);
      });
  }
}

export default new ApiBase();
