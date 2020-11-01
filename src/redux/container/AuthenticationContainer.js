import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import {bindActionCreators} from 'redux';
import Authenticationn from '../../component/Authentication';
import LoadingComponent from '../../component/Authentication/formLoading';
import LoginForm from '../../component/Authentication/LoginForm';
import * as actions from "../action/index";
import PropTypes from 'prop-types'; // ES6

class AuthenticationContainer extends Component {

  render() {
    const {authState, actions, loadingReducer} = this.props;
    const {loginFormOpenState, registerFormOpenState} = authState;
    const {
      openLoginForm,
      openRegisterForm,
      handleLogin,
      handleRegister,
      handleLeftLoading,
      handleCloseLeftLoading,
      handleCloseRightLoading,
      handleRightLoading,
      handleOpenRegisterConfirmModal,
      handleCloseRegisterConfirmModal,
      handleOpenConfirmModal,
      handleCloseConfirmModal
    } = actions;
    let token = localStorage.getItem('user');
    let user = localStorage.getItem('username');
    if (token && user) {
      return <Redirect to='/homepage'/>

    } else {
      return (
        <div>
          <Authenticationn >

            <LoginForm
              loginFormOpenState={loginFormOpenState}
              handleRegister={handleRegister}
              registerFormOpenState={registerFormOpenState}
              openLoginForm={openLoginForm}
              openRegisterForm={openRegisterForm}
              handleLogin={handleLogin}
              handleOpenConfirmModal={handleOpenConfirmModal}
              handleCloseConfirmModal={handleCloseConfirmModal}
              loadingReducer={loadingReducer}
              handleOpenRegisterConfirmModal={handleOpenRegisterConfirmModal}
              handleCloseRegisterConfirmModal={handleCloseRegisterConfirmModal}/>
            <LoadingComponent
              loadingReducer={loadingReducer}
              handleRightLoading={handleRightLoading}
              handleLeftLoading={handleLeftLoading}
              handleCloseLeftLoading={handleCloseLeftLoading}
              handleCloseRightLoading={handleCloseRightLoading}/>

          </Authenticationn>
        </div>
      );
    }
  }
}
const mapStateToProps = state => {
  return {authState: state.AuthReducer, loadingReducer: state.loadingReducer}
}
const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps, null, {forwardRef: true})(AuthenticationContainer);

AuthenticationContainer.propsTypes={
  authState:PropTypes.shape({
    loginFormOpenState:PropTypes.bool,
    registerFormOpenState:PropTypes.bool,
    isLogin:PropTypes.bool
  }),
  loadingReducer:PropTypes.shape({
    leftLoading:PropTypes.bool,
    rightLoading:PropTypes.bool,
    confirmModalOpenState:PropTypes.bool,
    registerConfirOpenState:PropTypes.bool,
    resetFormState:PropTypes.bool,
    FlistOpenState:PropTypes.bool,
    DrawerModalOpenState:PropTypes.bool,
    flistModalType:PropTypes.number,
    backdropOpenState:PropTypes.bool,
    drawerModalContent:PropTypes.any,
    loginMobileLoading:PropTypes.bool,
  }),
  actions:PropTypes.object
}