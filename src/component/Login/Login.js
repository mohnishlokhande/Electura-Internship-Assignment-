import { Button } from 'bootstrap';
import React, { Component } from 'react'

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
                <input type="text" name="user" onChange={(e)=>this.setState({name:e.target.value})}/><br/>
                <input type="password" name="password" onChange={(e)=>this.setState({password:e.target.value})}/><br/>
                <button onClick={()=>{this.login()}}> Login</button>
            </div>
        )
    }
}
