import React from 'react';
import styles from './RegisterForm.module.less';
import TextField from '../../../components/UI/TextField/TextField';
import Button from '../../../components/UI/Button/Button';
import { validateEmail } from '../../../util/Util';

class RegisterForm extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
        errors: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        loading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let valid = this.validateInput();
        if(valid){
            this.setState({loading: true});
            let registred = await this.handleRegister();
            if(registred){
                this.setState({loading: false});
            }
        }
    }

    validateInput(input , rules){
        let errors = {}

        if(!this.state.firstName){
            errors.firstName = "first name is required.";
        }

        if(!this.state.lastName){
            errors.lastName = "last name is required.";
        }

        if(!this.state.email){
            errors.email = "email is required.";
        }

        if(this.state.email && !validateEmail(this.state.email)){
            errors.email = "email is not valid.";
        }

        if(!this.state.password){
            errors.password = "password is required."
        }

        if(this.state.password && this.state.password.length < 6){
             errors.password = "password needs to be at least 6 characters."
        }

        if(this.state.password && !this.state.password.match(/[A-z]/)){
            errors.password = "password needs atleast 1 alphabetic character."
        }

        if(this.state.password && !this.state.password.match(/\d/)){
            errors.password = "password needs atleast 1 digit."
        }

        if(!this.state.confirmPassword){
            errors.confirmPassword = "password is required."
        }

        if(this.state.confirmPassword && this.state.confirmPassword !== this.state.password){
            errors.confirmPassword = "does not match the password."
        }

        this.setState({errors: errors});
        let errorsLength = Object.keys(errors).length
        return !(errorsLength > 0);
    }

    handleRegister = async () => {
        try {
            let input = {
                firstname: this.state.firstName,
                lastname: this.state.lastName,
                email: this.state.email,
                password: this.state.password
            }

            let response = await fetch("http://localhost:5000/api/user/register",
            {            
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(input)
            });
            if(response.ok){
                let data = await response.json();
                console.log(data);
            } 
            else if(response.status === 409){
                console.log("Email is already used.");
                let errors = {
                    ...this.state.errors,
                    email: "Email is already used."
                }
                this.setState({errors});
            }
            else {
                console.log("Internal Server Error!");
            }

        } catch(error) {
            console.log(error);
        }
    }

    inputChangedHandler = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className={styles.RegisterForm}>
                <h1> Register </h1>
                <form noValidate>
                    <TextField 
                        label="First Name"
                        name="firstName"
                        required
                        value={this.state.firstName}
                        error={this.state.errors.firstName ? true : false}
                        helperText={this.state.errors.firstName}
                        onChange={(e) => this.inputChangedHandler(e)}/>
                    <TextField 
                        label="Last Name"
                        name="lastName"
                        required
                        value={this.state.lastName}
                        error={this.state.errors.lastName ? true : false}
                        helperText={this.state.errors.lastName}
                        onChange={(e) => this.inputChangedHandler(e)}/>
                    <TextField
                        label="Email"
                        name="email"
                        required
                        value={this.state.email}
                        error={this.state.errors.email ? true : false}
                        helperText={this.state.errors.email}
                        onChange={(e) => this.inputChangedHandler(e)}/>
                    <TextField
                        type="password"
                        label="Password"
                        name="password"
                        required
                        value={this.state.password}
                        error={this.state.errors.password ? true : false}
                        helperText={this.state.errors.password}
                        onChange={(e) => this.inputChangedHandler(e)}/>
                    <TextField
                        type="password"
                        label="Confirm Password"
                        name="confirmPassword"
                        required
                        value={this.state.confirmPassword}
                        error={this.state.errors.confirmPassword ? true : false}
                        helperText={this.state.errors.confirmPassword}
                        onChange={(e) => this.inputChangedHandler(e)}/>
                    <Button color="primary" onClick={this.handleSubmit}> Register </Button>
                </form>
            </div>
        );
    }
}


export default RegisterForm;