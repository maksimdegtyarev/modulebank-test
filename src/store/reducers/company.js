const INITIAL_STORE = {
  list: [],
  types: [],
};

export default function (state = INITIAL_STORE, action) {
  if (action.type === 'UPDATE_TYPES') {
    return { ...state, types: action.payload };
  }
  if (action.type === 'UPDATE_COMPANIES') {
    return { ...state, list: action.payload };
  }
  return { ...state };
}
