import React from 'react';
import { Redirect } from 'react-router';
import LoginForm from './LoginForm/LoginForm';
import styles from './Login.module.less';
import Auth from '../../services/Auth/Auth';

class Login extends React.Component {

    render() {
        if(Auth.isAuth()){
            return <Redirect to="/"/>;
        }
        return (
            <div className={styles.Login}>
                <LoginForm />
            </div>
        );
    }
}

export default Login;