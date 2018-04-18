// @flow
import { combineReducers } from 'redux';
import company from './company';


export default function reducers() {
  return combineReducers({
    company,
  });
}
