import { call, put, takeLatest,delay } from "redux-saga/effects";
import * as constants from "../redux/constant";
import * as axiosCall from "../Api/AuthLink";
import * as actions from "../redux/action";

import ToastConfig from "../component/toast";
const Toast=new ToastConfig();
export function* authSaga(){
  yield takeLatest(constants.handleLogin,handleLoginSaga);
  yield takeLatest(constants.handleRegister,handleRegisterSaga);
}
function* handleRegisterSaga(action){
 try{
    yield put(actions.handleRightLoading());
    const res=yield call(axiosCall.registerAxios,action.payload);
    const{msg}=res.data;
    Toast.success(msg);
    yield delay(1000);
    yield put(actions.handleCloseRightLoading());
    yield delay(1000);
    
    yield put(actions.openLoginForm());
 }
 catch(err){
  const errorsMessage=err.response.data;
  console.log(errorsMessage);
  yield delay(1200);
  Toast.error(errorsMessage.msg);
  yield put(actions.handleCloseRightLoading());
  
  
  
  yield put(actions.handleCloseLeftLoading());
 }
}
function* handleLoginSaga(action){
    
   try{
    yield put(actions.handleLeftLoading()); 
    const {payload}=action;
    console.log(payload)
    const res=yield call(axiosCall.loginAxios,payload);
    console.log(res);
    const{token,msg}=res.data;
  
        localStorage.setItem('user',JSON.stringify(token));
        Toast.success(msg);
        yield delay(2000);
         yield put(actions.handleLoginOk());
         yield put(actions.handleCloseLeftLoading());
   }
   catch(err){
        const errorsMessage=err.response.data;
        console.log(errorsMessage);
        Toast.error(errorsMessage.msg);
        yield delay(2000);
        
        yield put(actions.handleCloseLeftLoading());
      //display err message
   }
}