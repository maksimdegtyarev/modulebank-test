import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Item } from '../index';

const company = {
  id: 1,
  name: 'Apple',
  number: 11111,
  type: 1,
  date: '15.04.2018',
  active: true,
};
Enzyme.configure({ adapter: new Adapter() });

describe('Company w/o store is visible', () => {

  test('Call without data', () => {
    const item = shallow(<Item />);
    expect(item.length).toEqual(1);
  });
  test('No paragraphs when no data', () => {
    const item = shallow(<Item />);
    expect(item.find('p').length).toBe(0);
  });
});
describe('Company with store is visible', () => {
  test('Call with store', () => {
    const initialStore = {
      company: {
        list: [company],
      },
    };
    const mockStore = configureStore();
    const store = mockStore(initialStore);
    const item = shallow(<Item store={store} id="1" />);
    expect(item.length).toEqual(1);
    expect(item.find('p').length).toBe(0);
  });
});
