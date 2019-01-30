import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import AuthContext from './contexts/auth-context';
import Auth from './services/Auth/Auth';

import './App.less';

class App extends Component {
    
    state = {
        user: Auth.getUser(),
    }

    setAuth = (user) => {
        this.setState({user});
    }
    
    render() {
        return (
            <React.Fragment>
                <Router>
                    <AuthContext.Provider value={{isAuth: this.state.isAuth, setAuth: this.setAuth}}>
                        <Header>
                            <Navbar user={this.state.user}/>
                        </Header>
                        <main className="container">
                            <Route exact path="/" component={Home} />
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </main>
                        <Footer />
                    </AuthContext.Provider>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
