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
export function updateCompany(id, data) {
  return {
    type: 'UPDATE_COMPANY_BEGIN',
    payload: {
      id,
      data,
    },
  };
}
export function updateCompanySuccess(id, data) {
  return {
    type: 'UPDATE_COMPANY_SUCCESS',
    payload: {
      id,
      data
    },
  };
}
export function updateCompanyFailure(id) {
  return {
    type: 'UPDATE_COMPANY_FAILURE',
    payload: id,
  };
}