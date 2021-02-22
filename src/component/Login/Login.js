import React, { Component } from 'react';
import '../HomePg/HomePg.css';

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
                            <div className="container homemain">
                                <div className="logbox">
                                    <input type="text" name="user" onChange={(e)=>this.setState({name:e.target.value})} 
                                        placeholder="Username" /><br/><br/>
                                    <input type="password" name="password" onChange={(e)=>this.setState({password:e.target.value})} 
                                        placeholder="Password" /><br/><br/>
                                    <button onClick={()=>{this.login()}} className="btn btn-primary"> Login</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
