import React, { Component } from 'react';
import Header from './Header/Header';
import { BrowserRouter as Router} from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import HomePg from './HomePg/HomePg';
import Login from './Login/Login';
import Other from './Other/Other';
import Footer from './Footer/Footer';


export default class MainPage extends Component{
    render(){
        return(
            <Router>
                <Header/>
                <Switch>   
                    <Route exact path="/" component={HomePg}/>
                    <Route path="/home" component={HomePg} />
                    <Route path="/login" component={Login} />
                    <Route path="/other" component={Other} />
                </Switch>
                <Footer/>
            </Router>
        )
    }
}