import React, { Component } from 'react';
import Header from './Header/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePg from './HomePg/HomePg';
import Login from './Login/Login';


export default class MainPage extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route exact path="/" component={Header} />
                    <Route path="/home" component={HomePg} />
                    <Route path="/login" component={Login} />
                </Switch>
                
            </Router>
        )
    }
}