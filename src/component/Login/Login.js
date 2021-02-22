import React, { Component } from 'react';
import { Label } from 'react-bootstrap';
import '../HomePg/HomePg.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {

    constructor(){
        super();
        this.state={
            name:'',
            password:''
        }
    }
    login(){
        console.log(this.state)
    }

    render() {
        return (
            <div>
                <div className="cont">
                    <div className="imgH">
                        <div className="grad">
                            <div className="container logmain">
                                <div className="logbox">
                                    <label><b>Username</b></label>
                                    <input type="text" name="user" onChange={(e)=>this.setState({name:e.target.value})} 
                                        placeholder="Username" /><br/><br/>
                                    <label><b>Password</b></label>
                                    <input type="password" name="password" onChange={(e)=>this.setState({password:e.target.value})} 
                                        placeholder="Password" /><br/><br/>
                                    <Link to="/home"><button onClick={()=>{this.login()}} className="btn btn-primary"> Login</button></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
