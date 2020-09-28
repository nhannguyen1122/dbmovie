
import { all } from 'redux-saga/effects'
import { getKeyWordSaga } from './getKeyWordSaga'
export function* rootSaga(){
   yield all([getKeyWordSaga()]);
}