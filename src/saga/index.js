
import { all } from 'redux-saga/effects'
import { authSaga } from './authSaga';
import { flistSaga } from './flistSaga';
import { getKeyWordSaga } from './getKeyWordSaga'
export function* rootSaga(){
   yield all([getKeyWordSaga(),authSaga(),flistSaga()]);
}