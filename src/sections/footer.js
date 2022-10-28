import React from "react";

//import images
import logoImg from '../images/logo.svg';
import i4GLogo from '../images/I4G.svg';

class Footer extends React.Component {
    render(){
        return (
            <div id="footer" class="flex-container">
            <div id="logo">
                <img src={logoImg} alt=""/>
            </div>
            <div>
                <p>HNG Internship 9 Frontend Task</p>
            </div>
            <div id="I4g_logo">
                <img src={i4GLogo} alt=""/>
            </div>
        </div>
        )
    }
}

export default Footer