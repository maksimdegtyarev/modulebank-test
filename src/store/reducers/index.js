// @flow
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import company from './company';


export default function reducers() {
  return combineReducers({
    company,
    form: formReducer,
  });
}
