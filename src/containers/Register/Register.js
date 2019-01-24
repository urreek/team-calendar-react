import React from 'react';
import RegisterForm from './RegisterForm/RegisterForm';

class Register extends React.Component {

    render() {
        return (
            <div>
                <h1 style={{color: "white"}}> Register </h1>
                <div>
                    <RegisterForm />
                </div>
            </div>
        );
    }
}

export default Register;