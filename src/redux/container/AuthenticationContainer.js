import React, { Component } from 'react';
import Authenticationn from '../../component/Authentication';
import LoginForm from '../../component/Authentication/LoginForm';
import RegisterModal from '../../component/Authentication/RegisterModal';


class AuthenticationContainer extends Component {
    render() {
        return (
            <div>
                <Authenticationn >
                    <LoginForm >
                        <RegisterModal />
                    </LoginForm>
                    </Authenticationn>
            </div>
        );
    }
}

export default AuthenticationContainer;
