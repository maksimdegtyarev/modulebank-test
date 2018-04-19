export function updateTypes(types) {
  return {
      type: 'UPDATE_TYPES',
      payload: types,
  };
}
export function updateCompanies(companies) {
  return {
    type: 'UPDATE_COMPANIES',
    payload: companies,
  };
}