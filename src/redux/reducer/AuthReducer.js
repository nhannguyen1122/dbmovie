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
        case constants.getUsername: 
            return {...state}
        
        case constants.handleLoginOk:
            
            localStorage.setItem('user',JSON.stringify(action.payload));
            return {...state}
        case constants.handleLogout: 
             localStorage.removeItem('user');
             localStorage.removeItem('username');
            return {...state,isLogin:false}
        default:
            return state;
    }
}
export default AuthReducer;