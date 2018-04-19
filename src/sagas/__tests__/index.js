import { put, call } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { updateCompany, fetchTypes, fetchCompanies } from '../index';
import { updateCompanySuccess, updateTypes, updateCompanies } from '../../actions/company';
import Api from '../../api';


describe('Update company data', () => {
  const it = sagaHelper(updateCompany({ type: 'UPDATE_COMPANY_BEGIN', payload: { id: 1, data: [] } }));
  
  it('should call api at first', (result) => {
    expect(result).toEqual(call(Api.updateCompany, 1, []));
    return { success: true };
  });
  it('then it trigger an success action', (result) => {
    expect(result).toEqual(put(updateCompanySuccess(1, [])));
  });
});

describe('Fetch types', () => {
  const it = sagaHelper(fetchTypes());
  
  it('should erase current types list', (result) => {
    expect(result).toEqual(put(updateTypes([])));
  });
  it('then should call api', (result) => {
    expect(result).toEqual(call(Api.getTypes));
    return [{
      id: 1,
      value: '1'
    }, {
      id: 2,
      value: '2',
    }];
  });
  it('then should save data to store', (result) => {
    expect(result).toEqual(put(updateTypes([{
      id: 1,
      value: '1'
    }, {
      id: 2,
      value: '2',
    }])));
  });
});

describe('Fetch companies', () => {
  const it = sagaHelper(fetchCompanies());
  
  it('should erase current companies list', (result) => {
    expect(result).toEqual(put(updateCompanies([])));
  });
  it('then should call api', (result) => {
    expect(result).toEqual(call(Api.getCompanies));
    return [{
      id: 1,
      name: '1'
    }, {
      id: 2,
      name: '2',
    }];
  });
  it('then should save data to store', (result) => {
    expect(result).toEqual(put(updateCompanies([{
      id: 1,
      name: '1'
    }, {
      id: 2,
      name: '2',
    }])));
  });
});