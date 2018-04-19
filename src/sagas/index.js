import { takeEvery, put, call, all } from 'redux-saga/effects';
import Api from '../api';
import { updateTypes, updateCompanies } from '../actions/company';


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

export default function*() {
  yield all([ fetchTypes(), fetchCompanies() ]);
}