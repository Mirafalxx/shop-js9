import { put, takeEvery } from 'redux-saga/effects';
import axiosApi from '../../axiosApi';
import { fetchCategoriesFailure, fetchCategoriesSuccess, fetchCategoriesRequest } from '../actions/categoriesActions';
import { NotificationManager } from 'react-notifications';

export function* fetchCategories() {
  try {
    const response = yield axiosApi.get('/categories');
    yield put(fetchCategoriesSuccess(response.data));
  } catch (error) {
    NotificationManager.error('Failed to fetch categories');
    yield put(fetchCategoriesFailure());
  }
}

const categoriesSagas = [takeEvery(fetchCategoriesRequest, fetchCategories)];

export default categoriesSagas;
