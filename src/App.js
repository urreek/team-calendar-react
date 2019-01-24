import React, { Component } from 'react';
import './App.less';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import Register from './containers/Register/Register';
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <div>
                        <Header>
                            <Navbar/>
                        </Header>
                        <main>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/register" component={Register} />
                        </main>
                        <Footer />
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
