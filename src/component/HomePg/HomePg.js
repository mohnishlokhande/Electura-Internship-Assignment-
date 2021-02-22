import React, { Component } from 'react';
import './HomePg.css';
import { Link } from 'react-router-dom';


export default class HomePg extends Component {

    render() {
        return (
            <div className="cont">
                <div className="imgH">
                    <div className="grad">
                        <div className="container homemain">
                            <div className="headmain">

                                <h4 className="hclass">Your Learning Journey Matters to Us</h4>
                                <hr />
                                <h1 className="hmain">Future <br />achievers <br />study from <br />IITians Online</h1>
                                <br />
                                <button type="button" class="regi">Register For Free</button>
                            </div>
                            <div className="getstart">
                                 <h3>Get Started with Electura!</h3>
                                 <p style={{margin:"5px"}}>
                                 Get free Counselling from an IITian
                                 </p>
                                 <hr />
                                 <br />
                                 <label>Your Name</label>
                                 <input type="text" />
                                 <br />
                                 <label>Phone Number</label>
                                 <input type="text" />
                                 <br />
                                 <button className="send" type="submit">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
