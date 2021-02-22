import React, { Component } from 'react';
import './HomePg.css';
import { Link } from 'react-router-dom';
import path from './path.jpeg';

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
                        <br/>
                        <div className="cards">
                            <div className="card1">
                                <h1>Online Live Classes</h1>
                                <p>Get your concepts clear
                            directly through a dedicated coach</p>
                            </div>
                            <div className="card2">
                                <h1>IITian Teachers</h1>
                                <p>Premium teachers who have passed one of the toughest exams themselves</p>
                            </div>
                            <div className="card3">
                                <h1>For Classes 9th to 12th</h1>
                                <p>Changing the way of learning for 9th to 12th grade students with online 1 to 1 classes</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="def">
                    <p>
                        Electura lays a path of realizable and practical knowledge for young minds, by acting as a rendezvous between them and high academic achievers, through technology.
                    </p>
                    <br />
                    <h1>The Path to Success</h1>
                    <img src={path} alt="path" />
                    <div className="registerdiv">
                        <h3>
                            Register for a webinar with an IITian Expert
                    </h3>
                        <button type="button" class="register">REGISTER</button>

                    </div>

                    <h2>Happy Students, Happy Parents!</h2>
                    <hr style={{ width: "50px", color: "black" }} />
                </div>
                <div className="hpcards">
                    <div className="hpcard1">
                        <p>There are a lot of services in the market for e-learning but I was looking for something that I can trust on. I contacted Electura for a doubt clearing session and I was amazed at the quality of the teachers they have. They put forward their best foot in order to help me. I am surely going to continue with Electura for my study journey.</p>
                        <br />
                        <p>Rohit Student</p>
                    </div>
                    <div className="hpcard1">
                        <p>I was worried about my child as he was never able to focus on his studies. I got to know about Electura & looking at the background of their teachers, I booked a counselling session for my kid. It was good to see such dedicated tutors, genuinely thinking about a child’s future. After the session, I am confident enough and ready to enroll my child with them.</p>
                        <br />
                        <p>Neha Parent</p>
                    </div>
                    <div className="hpcard1">
                        <p>I always strive for creating value in this world. Though having worked in the corporate as well as going through the MBA process after cracking IIT, I was looking for the satisfaction of shaping the future. Electura gave me a platform to give back to the society and help young minds of the world. Happy to be an Electurar.</p>
                        <br />
                        <p>Harsh Tutor</p>
                    </div>

                </div>

            </div>
        )
    }
}
