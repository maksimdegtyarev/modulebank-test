import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from '../sagas';


export default function getStore() {
  const saga = createSagaMiddleware();
  let middlewares = [
    saga,
  ];
  if (process.env.NODE_ENV === 'development') {
    middlewares = [...middlewares, logger];
  }
  const store = createStore(
    reducers(),
    {},
    applyMiddleware(...middlewares),
  );
  saga.run(sagas);
  return store;
}
