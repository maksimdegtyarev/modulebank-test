import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger';
import reducers from './reducers';


export default function getStore() {
  let middlewares = [
    thunkMiddleware,
  ];
  if (process.env.NODE_ENV === 'development') {
    middlewares = [...middlewares, logger];
  }
  return createStore(
    reducers(),
    {},
    applyMiddleware(...middlewares),
  );
}
