import React from 'react';
import * as constants from "../constant";
let init={
    loginFormOpenState:true,
    registerFormOpenState:false,

}

const AuthReducer=(state=init,action)=>{
    switch(action.type){
        case constants.openLoginForm:
            return {...state,loginFormOpenState:true,registerFormOpenState:false}
        case constants.openRegisterForm:
            return {...state,registerFormOpenState:true,loginFormOpenState:false}
        default:
            return state;
    }
}
export default AuthReducer;