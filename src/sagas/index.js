import { takeEvery, put, call, all } from 'redux-saga/effects';
import Api from '../api';
import {
  updateTypes,
  updateCompanies,
  updateCompanySuccess,
  updateCompanyFailure,
} from '../actions/company';


function* fetchTypes() {
  yield put(updateTypes([]));
  const types = yield call(Api.getTypes);
  yield put(updateTypes(types));
}

function* fetchCompanies() {
  yield put(updateCompanies([]));
  const companies = yield call(Api.getCompanies);
  yield put(updateCompanies(companies));
}

function* updateCompany(action) {
  const { id, data } = action.payload;
  const success = yield call(Api.updateCompany, id, data);
  if (success) {
    yield put(updateCompanySuccess(id, data));
  } else {
    yield put(updateCompanyFailure(id));
  }
}

export default function*() {
  yield takeEvery('UPDATE_COMPANY_BEGIN', updateCompany);
  yield all([ fetchTypes(), fetchCompanies() ]);
}
