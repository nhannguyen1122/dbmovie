import React from 'react';
import * as constants from "../constant";
let init={
    loginFormOpenState:true,
    registerFormOpenState:false,
    isLogin:false,

}

const AuthReducer=(state=init,action)=>{
    switch(action.type){
        case constants.openLoginForm:
            return {...state,loginFormOpenState:true,registerFormOpenState:false}
        case constants.openRegisterForm:
            return {...state,registerFormOpenState:true,loginFormOpenState:false}
        case constants.handleRegister: 
            return {...state}
        // case constants.handleRegisterOk: 
        //     return {...state,}
        case constants.handleLogin:
            return {...state}
        case constants.handleLoginOk:
            console.log("is login",state.isLogin);
            return {...state,isLogin:true}
        case constants.handleLogout: 
             localStorage.removeItem('user');
            return {...state,isLogin:false}
        default:
            return state;
    }
}
export default AuthReducer;