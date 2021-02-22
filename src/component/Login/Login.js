import React, { Component } from 'react';
import '../HomePg/HomePg.css';
import { Link } from 'react-router-dom';
import {Form, FormGroup, Label, Input,Col, FormFeedback, Row } from 'reactstrap';


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
    handleChange = (e) =>
    this.setState({
        [e.target.name] : e.target.value
    })

    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({
            name:'',
            password:'' 
        })
        this.props.history.push('/home')
    }


    render() {
        return (
            <div>
                <div className="cont">
                    <div className="imgH">
                        <div className="grad">
                            <div className="container logmain">
                                <div className="logbox">
                                <form onSubmit={this.handleSubmit}> 
                                    <FormGroup className="col-md-12">
                                        <Row>
                                        <Label htmlFor ="name"><b>Username</b></Label> 
                                            <Input type="text" id="name" name="name" 
                                                onChange = {this.handleChange}
                                                placeholder="Username" required />
                                        </Row>
                                    </FormGroup>
                                    <FormGroup className="col-md-12">
                                        <Row>
                                        <Label htmlFor ="password"><b>Password</b></Label>
                                            <Input type="password" id="password" name="password" value ={this.state.password} onChange = {this.handleChange}
                                                placeholder="Enter Password" required/>
                                        </Row>
                                    </FormGroup> 
                                    <br/>
                                    <FormGroup row>
                                        <Col>
                                            <input type="submit" className="btn btn-primary" value="login"></input>
                                        </Col>
                                    </FormGroup>
                                </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
