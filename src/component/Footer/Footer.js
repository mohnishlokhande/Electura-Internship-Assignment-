import React from 'react'
import { Component } from 'react';
import './Footer.css'

export default class Footer extends Component{
    render(){
        return(
            <div className="footer">
                <a href="https://github.com/mohnishlokhande/Electura-Internship-Assignment-" className="viewCode"> View Code</a>
                <br/>

                <a className="coptRig">Copyright © 2021 Electura | Powered by BrandCobblers Services Pvt. Ltd.</a>
            </div>
        )
    }
}