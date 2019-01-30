import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './Login.module.less';

class Login extends React.Component {

    render() {
        return (
            <div className={styles.Login}>
                <LoginForm />
            </div>
        );
    }
}

export default Login;