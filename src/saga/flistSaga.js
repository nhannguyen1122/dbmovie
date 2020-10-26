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
 yield takeLatest(constants.addMovieToFlist,addMovieToFlistSaga);
 yield takeLatest(constants.handleDeleteMovie,handleDeleteMovieSaga);
}
function* handleDeleteMovieSaga(action) {
    try {
        yield put(actions.handleOpenBackdrop(true));
        console.log(action.payload);
        const res=yield call(axioscall.handleDeleteMovieAxios,action.payload.id);
        const {msg}=res.data;
        if(res.status===200){
            Toast.success(msg);
            yield put(actions.handleDeleteMovieOk(action.payload.id));
            yield delay(1000);
            yield put(actions.handleOpenBackdrop(false));
            
        }
    } catch (error) {
        
    }
}
function * addMovieToFlistSaga(action){
    try {
        yield put(actions.handleOpenBackdrop(true));
       console.log(action.payload); 
       const res=yield call(axioscall.addMovieToFlistAxios,action.payload);
       console.log(res);
       const{msg}=res.data;
       if(res.status===200){
        Toast.success(msg);
        yield delay(1000);
        yield put(actions.closeFlist());
        yield put(actions.handleOpenBackdrop(false));
    }
    } catch (err) {
        console.log(err);
        const errorsMessage = err.response.data;
    console.log(errorsMessage);
    Toast.error(errorsMessage.msg);
    yield delay(1000);
    yield put(actions.handleOpenBackdrop(false));
    }
}
function* updateListSaga(action) {
    try {
        yield put(actions.handleOpenBackdrop(true));
        console.log(action.payload);
        const res=yield call(axioscall.updateFlistAxios,action.payload);
        console.log(res);
        const{msg,playlist}=res.data;
        if(res.status===200){
            
            yield put(actions.handleUpdateListOk(playlist));
            Toast.success(msg);
            yield delay(1000);
            yield put(actions.closeFlist());
            yield put(actions.handleOpenBackdrop(false));
        }
    } catch (err) {
        console.log(err);
        const errorsMessage = err.response.data;
    console.log(errorsMessage);
    Toast.error(errorsMessage.msg);
    yield delay(1000);
    yield put(actions.handleOpenBackdrop(false));
    }
}
function* addNewFlistSaga(action){
    try {
        yield put(actions.handleOpenBackdrop(true));
        console.log(action.payload)
        const res=yield call(axioscall.addNewFlistAxios,{name:action.payload});
        console.log(res);
        const {msg,playlist}=res.data;
        if(res.status==201){
            Toast.success(msg)
            yield put(actions.addNewFlistOk(playlist));
            yield delay(1000);
            yield put(actions.closeFlist());
            yield put(actions.handleOpenBackdrop(false));
        }
    } catch (err) {
        
        console.log(err);
        const errorsMessage = err.response.data;
    console.log(errorsMessage);
    Toast.error(errorsMessage.msg);
    yield delay(1000);
    yield put(actions.handleOpenBackdrop(false));
    }
}
function* deleteFlistSaga(action){
    try {
        yield put(actions.handleOpenBackdrop(true));
        console.log(action.payload);
        const res=yield call(axioscall.deleteFlistAxios,action.payload);
        const {msg}=res.data;
        if(res.status===200){
            yield put(actions.deleteFlistOk(action.payload));
            Toast.success(msg);
            yield delay(1000);
            yield put(actions.handleOpenBackdrop(false));
           
        }
    }
    catch(err){
        console.log(err);
        const errorsMessage = err.response.data;
    console.log(errorsMessage);
    Toast.error(errorsMessage.msg);
    yield delay(1000);
    yield put(actions.handleOpenBackdrop(false));
    
    }
}
function* getFlistSaga(){
    try {
        yield put(actions.handleOpenBackdrop(true));
        const res=yield call(axioscall.getFlistAxios);
        console.log(res);
        const{msg,result}=res.data;
        yield put(actions.getFlistOk(result));
        yield put(actions.handleOpenBackdrop(false));
    } catch (error) {
        console.log(error);
    }
}