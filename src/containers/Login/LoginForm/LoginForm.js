import React from 'react';
import TextField from '../../../components/UI/TextField/TextField';
import Button from '../../../components/UI/Button/Button';
import styles from './LoginForm.module.less';
import { validateEmail } from '../../../util/Util';
import Auth from '../../../services/Auth/Auth';
import AuthContext from '../../../contexts/auth-context';

class LoginForm extends React.Component {
    static contextType = AuthContext;

    state = {
        email: "",
        password: "",
        errors: {
            email: "",
            password: ""
        },
        loading: false
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        let valid = this.validateInput();
        if(valid){
            this.handleLogin();
        }
    }

    validateInput(){
        let errors = {}

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

        this.setState({errors: errors});
        let errorsLength = Object.keys(errors).length
        return !(errorsLength > 0);
    }

    handleLogin = async () => {
        this.setState({loading: true});
        let response = await Auth.login(this.state.email, this.state.password);

        if(response.ok) {
            console.log("login");
            let token = await response.json();
            Auth.setToken(token);
            let user = Auth.getUser();
            this.context.setAuth(user);
        }

        else if(response.status === 400){
            console.log("Wrong email or password.");
        }

        else {
            console.log("Internal Server Error");
        }

        this.setState({loading: false});
    }

    inputChangedHandler = (e) => {
        const { name, value } = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
        <div className={styles.LoginForm}>
            <h1> Login </h1>
            <form noValidate>
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
                <Button color="primary" onClick={this.handleSubmit}> Login </Button>
            </form>
        </div>
        );
    }
}

export default LoginForm;