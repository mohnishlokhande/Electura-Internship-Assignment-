import React, { Component } from 'react';
import './HomePg.css';
import { Link } from 'react-router-dom';


export default class HomePg extends Component {

    render() {
        return (
            <div>
                <div className="imgH">
                    <div className="grad">
                        <div className="container homemain">
                            <div className="headmain">
                                
                                <h4 className="hclass">Your Learning Journey Matters to Us</h4>
                                <hr/>
                                <h1 className="hmain">Future <br/>achievers <br/>study from <br/>IITians Online</h1>
                                {/* <button class="btn btn-info">
                                    <Link to="/map" className="" >Register For Free </Link>                    
                                </button>   */}
                                <br/>
                                <button type="button" class="btn btn-primary">Register For Free</button> 
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
