import {takeEvery, put} from 'redux-saga/effects';
import {fetchCategoriesRequest, fetchCategoriesFailure, fetchCategoriesSuccess} from "../actions/categoriesActions";
import axiosApi from "../../axiosApi";
import {addNotification} from "../actions/notifierActions";

export function* fetchCategories() {
  try {
    const response = yield axiosApi.get('/categories');
    yield put(fetchCategoriesSuccess(response.data));
  } catch (e) {
    yield put(addNotification({message: 'Fetch categories failed', options: {variant: 'error'}}));
    yield put(fetchCategoriesFailure());
  }
}

const categoriesSagas = [
  takeEvery(fetchCategoriesRequest, fetchCategories)
];

export default categoriesSagas;