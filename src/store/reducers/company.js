const INITIAL_STORE = {
  list: [{
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
  }],
  types: [{
    id: 1,
    value: 'ИП',
  }, {
    id: 2,
    value: 'ООО',
  }],
};

export default function (state = INITIAL_STORE, action) {
  return { ...state };
}
