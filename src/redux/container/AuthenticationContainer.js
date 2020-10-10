import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import Authenticationn from '../../component/Authentication';
import LoadingComponent from '../../component/Authentication/formLoading';
import LoginForm from '../../component/Authentication/LoginForm';
import * as actions from "../action/index";


class AuthenticationContainer extends Component {
    
    
   
   
    render() {
        const{authState,actions,loadingReducer}=this.props;
        const{isLogin}=authState
        const{loginFormOpenState,registerFormOpenState}=authState;
        const{openLoginForm,openRegisterForm,handleLogin,handleRegister,
            handleLeftLoading,handleCloseLeftLoading,handleCloseRightLoading,handleRightLoading}=actions;
       
        if(isLogin){
            return <Redirect to='/homepage'/>
          
       }
       else{
        return (
            <div>
                <Authenticationn >
                    
                    <LoginForm loginFormOpenState={loginFormOpenState}
                    handleRegister={handleRegister}
                    registerFormOpenState={registerFormOpenState}
                    openLoginForm={openLoginForm}
                    openRegisterForm={openRegisterForm}
                    handleLogin={handleLogin}
                    />
                    <LoadingComponent loadingReducer={loadingReducer}
                    handleRightLoading={handleRightLoading}
                    handleLeftLoading={handleLeftLoading}
                    handleCloseLeftLoading={handleCloseLeftLoading}
                    handleCloseRightLoading={handleCloseRightLoading}
                    />
                   
                    </Authenticationn>
            </div>
        );
    }}
}
const mapStateToProps=state=>{
    return {
        authState:state.AuthReducer,
        loadingReducer:state.loadingReducer
    }
}
const mapDispatchToProps=dispatch=>{
    return {
       actions: bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps,null,{forwardRef: true}) (AuthenticationContainer);
