import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { persistReducer, persistStore } from 'redux-persist';
import { routerMiddleware } from 'connected-react-router';
import rootReducer from './reducers/root.reducers';
import rootSaga from './sagas/root.saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
  // blacklist: ['auth'],
  // whitelist: ['auth'],
};

export const history = createBrowserHistory({ forceRefresh: true });

const persistedReducer = persistReducer(persistConfig, rootReducer(history));
const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();

let enhancer;
if (process.env.NODE_ENV === 'production') {
  enhancer = compose(
    applyMiddleware(sagaMiddleware, routerMiddleware(history))
  );
} else {
  enhancer = composeWithDevTools(
    applyMiddleware(sagaMiddleware, loggerMiddleware, routerMiddleware(history))
  );
}

const store = createStore(persistedReducer, enhancer);

sagaMiddleware.run(rootSaga);
const persistor = persistStore(store);

export { store, persistor };
