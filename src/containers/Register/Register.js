import React from 'react';
import RegisterForm from './RegisterForm/RegisterForm';

class Register extends React.Component {

    render() {
        return (
            <div>
                <h1 style={{color: "white"}}>Register</h1>
                <RegisterForm />
            </div>
        );
    }
}

export default Register;