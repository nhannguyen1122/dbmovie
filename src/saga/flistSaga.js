import { call, delay, put, takeLatest } from "redux-saga/effects";

import * as constants from '../redux/constant'
import * as axioscall from "../Api/FlistLink"
import * as actions from '../redux/action'
import toast from "../Api/toast";
const Toast=new toast();
export function* flistSaga(){
 yield takeLatest(constants.getFlist,getFlistSaga);
 yield takeLatest(constants.deleteFlist,deleteFlistSaga);
 yield takeLatest(constants.addNewFlist,addNewFlistSaga);
 yield takeLatest(constants.handleUpdateList,updateListSaga)
}
function* updateListSaga(action) {
    try {
        console.log(action.payload);
        const res=yield call(axioscall.updateFlistAxios,action.payload);
        console.log(res);
        const{msg,playlist}=res.data;
        if(res.status===200){
            
            yield put(actions.handleUpdateListOk(playlist));
            Toast.success(msg);
            yield delay(1000);
            yield put(actions.closeFlist());
        }
    } catch (err) {
        console.log(err);
        const errorsMessage = err.response.data;
    console.log(errorsMessage);
    Toast.error(errorsMessage.msg);
    }
}
function* addNewFlistSaga(action){
    try {
        console.log(action.payload)
        const res=yield call(axioscall.addNewFlistAxios,{name:action.payload});
        console.log(res);
        const {msg,playlist}=res.data;
        if(res.status==201){
            Toast.success(msg)
            yield put(actions.addNewFlistOk(playlist));
            yield delay(1000);
            yield put(actions.closeFlist());
        }
    } catch (err) {
        
        console.log(err);
        const errorsMessage = err.response.data;
    console.log(errorsMessage);
    Toast.error(errorsMessage.msg);
    }
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
        console.log(err);
        const errorsMessage = err.response.data;
    console.log(errorsMessage);
    Toast.error(errorsMessage.msg);
    
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