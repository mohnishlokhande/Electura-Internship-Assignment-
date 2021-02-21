import React, { Component } from 'react';
import './Header.css';
import {Navbar, NavbarBrand, NavItem, Nav, NavbarToggler, Collapse} from 'reactstrap';
import { Link } from 'react-router-dom';

export default class Header extends Component {

    constructor(props){
        super(props);
        this.state= {
            isNavOpen: false
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
            <div>
                <div className="container d-flex align-items-center">
                    <a href="/" className="navbar-brand mt-0 mb-0" >
                        <h1 className="navHead">Electura</h1>
                        {/* <img src={Logo} style={{width:"155px"}}  alt="SMARTEDU"/> */}
                    </a>
                    <br/>
                    <Navbar className="nav-menu d-none d-lg-block ml-auto" dark expand="md">
                    <NavbarToggler onClick={this.toggleNav}  >  </NavbarToggler>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <Link to="/mainpage" className="nav-link">Home</Link>
                            </NavItem>
                            {/* <NavItem>
                                <Link to="/bootcamp" className="nav-link"><a>Latest Skills on Demand</a></Link>
                            </NavItem> */}
                            <NavItem>
                                <Link to="/summercamp" className="nav-link"><a>Youth Camp</a></Link>
                            </NavItem>
                            <NavItem>
                                <Link to="/aboutus" className="nav-link"><a>About Us</a></Link>
                            </NavItem>
                        </Nav>
                        </Collapse>
                    </Navbar>
                    
                    <Link to="/signin"><a className="get-started-btn scrollto" style={{color:"white"}}>Login/Sign up</a></Link>
                </div>
            </div>
        )
    }
}
