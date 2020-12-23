import { applyMiddleware, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from '../reducers/root.reducers';
import rootSaga from '../sagas/root.saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['session'],
};

export const history = createBrowserHistory({ forceRefresh: true });

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export default function (initialState = {}) {
  const loggerMiddleware = createLogger();
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [
    loggerMiddleware,
    sagaMiddleware,
    routerMiddleware(history),
  ];

  const store = createStore(
    persistedReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(rootSaga);

  let persistor = persistStore(store);

  return { store, persistor };
}
