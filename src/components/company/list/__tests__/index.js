import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { List } from '../index';

describe('Companies are visible', () => {
  const companies = [{
    id: 1,
    name: 'Apple',
    number: 11111,
    type: 1,
    date: '15.04.2018',
    active: true,
  }, {
    id: 2,
    name: 'Amazon',
    number: 22222,
    type: 2,
    date: '16.04.2018',
    active: false,
  }, {
    id: 3,
    name: 'Ebay',
    number: 33333,
    type: 1,
    date: '18.04.2018',
    active: true,
  }];
  Enzyme.configure({ adapter: new Adapter() });

  test('3 company are shown', () => {
    const list = shallow(<List companies={companies} />);
    expect(list.find('li').length).toBe(3);
  });
  test('0 companies are shown', () => {  
    const list = shallow(<List companies={[]} />);
    expect(list.find('li').length).toBe(0);
  });
});
