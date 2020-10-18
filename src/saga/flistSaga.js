import { call, put, takeLatest } from "redux-saga/effects";

import * as constants from '../redux/constant'
import * as axioscall from "../Api/FlistLink"
import * as actions from '../redux/action'
import toast from "../Api/toast";
const Toast=new toast();
export function* flistSaga(){
 yield takeLatest(constants.getFlist,getFlistSaga);
 yield takeLatest(constants.deleteFlist,deleteFlistSaga);

}
function* deleteFlistSaga(action){
    try {
        console.log(action.payload);
        const res=yield call(axioscall.deleteFlistAxios,action.payload);
        const {msg}=res.data;
        if(res.status===200){
            yield put(actions.deleteFlistOk(action.payload));
            Toast.success(msg);
        }
    }
    catch(err){
        console.log(err)
    }
}
function* getFlistSaga(){
    try {
        const res=yield call(axioscall.getFlistAxios);
        console.log(res);
        const{msg,result}=res.data;
        yield put(actions.getFlistOk(result));
    } catch (error) {
        console.log(error);
    }
}