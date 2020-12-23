import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createBrowserHistory } from 'history';
import { persistReducer, persistStore } from 'redux-persist';
import rootReducer from '../reducers/root.reducers';
import rootSaga from '../sagas/root.saga';
import { routerMiddleware } from 'connected-react-router';
import storage from 'redux-persist/lib/storage';

const persistConfig = { key: 'root', storage };

export const history = createBrowserHistory({ forceRefresh: true });

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function (initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware, routerMiddleware(history)];

  const store = createStore(
    persistedReducer,
    initialState,
    compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  // loadUser(store, userManager);

  let persistor = persistStore(store);

  return { store, persistor };
}
