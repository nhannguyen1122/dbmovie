import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Authenticationn from '../../component/Authentication';
import LoginForm from '../../component/Authentication/LoginForm';
import * as actions from "../action/index";


class AuthenticationContainer extends Component {
    render() {
        const{authState,actions}=this.props;
        const{loginFormOpenState,registerFormOpenState}=authState;
        const{openLoginForm,openRegisterForm}=actions;
        console.log('AuthProps',authState);
        return (
            <div>
                <Authenticationn >
                    
                    <LoginForm loginFormOpenState={loginFormOpenState}
                    registerFormOpenState={registerFormOpenState}
                    openLoginForm={openLoginForm}
                    openRegisterForm={openRegisterForm}
                    />
                       
                   
                    </Authenticationn>
            </div>
        );
    }
}
const mapStateToProps=state=>{
    return {
        authState:state.AuthReducer
    }
}
const mapDispatchToProps=dispatch=>{
    return {
       actions: bindActionCreators(actions,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps,null,{forwardRef: true}) (AuthenticationContainer);
