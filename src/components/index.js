import React from 'react';
import { Provider } from 'react-redux';
import Company from './company';
import getStore from '../store/';


const store = getStore();
export default function() {
  return (
    <Provider store={store}>
      <Company />
    </Provider>
  );
}