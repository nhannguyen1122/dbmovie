
import { all } from 'redux-saga/effects'
import { authSaga } from './authSaga';
import { getKeyWordSaga } from './getKeyWordSaga'
export function* rootSaga(){
   yield all([getKeyWordSaga(),authSaga()]);
}