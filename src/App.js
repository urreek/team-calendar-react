import React, { Component } from 'react';
import './App.less';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Home from './containers/Home/Home';
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
                        </main>
                    </div>
                </Router>
            </React.Fragment>
        );
    }
}

export default App;
