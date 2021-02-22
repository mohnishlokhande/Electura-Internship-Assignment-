import React, { Component } from 'react';
import './Header.css';
import {NavLink, Redirect} from 'react-router-dom';
import { Navbar, NavbarBrand,Nav,NavbarToggler,Collapse,NavItem, Jumbotron, Button, Modal, ModalBody,ModalHeader, Form, FormGroup, Input, Label } from 'reactstrap';
import Logo from './logo.png';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state = {
            isNavOpen: false,
        };
        this.toggleNav = this.toggleNav.bind(this);                
    }

    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }


    render() {
        return (
            <div className="outContainerNav">
                <div className="mcontainer d-flex align-items-center">
                    <a href="/" className="navbar-brand" >
                        <img src={Logo} style={{width:"155px"}}  alt="Electura"/>
                    </a>
                    <br/>
                    
                    <Navbar className="nav-menu d-lg-block ml-auto" dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />&nbsp;
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/select">
                                        Home&nbsp;
                                    </NavLink>
                                </NavItem>
                                <NavItem>
    
                                    <NavLink className="nav-link" to="/searchname">
                                        About Us&nbsp;
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/map">
                                        Our Tutors&nbsp;
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">
                                        Buy a Course&nbsp;
                                    </NavLink>
                                </NavItem> 
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">
                                        Join as teacher&nbsp;
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">
                                        Blogs&nbsp;
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">
                                        Contact&nbsp;
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/team">
                                        <span className="fa fa-phone fa-lg"></span>&nbsp;+91-93022 75951&nbsp;
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="logout" navbar>
                                <NavLink className="nav-link" to="/">
                                    <button type="button" className="btn btn-primaryget-started-btn"  
                                            
                                            ><span className="fa fa-sign-out aa fa-lg"/> Login/Sign up</button> 
                                </NavLink>
                            </Nav>
                        </Collapse>
                    
                </Navbar>  
                </div>
            </div>
        )
    }
}
