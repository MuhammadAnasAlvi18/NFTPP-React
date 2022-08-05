import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/Images/Component 4 – 1.png";
import loginBtnImG from '../Assets/Images/Group 190.png'

const SignInSection = () => {
    return (
        <div className="loginForm">
            <Link to='/'><a href="#"><img src={logo} alt='logo'></img></a></Link>
            <input type="text" placeholder="USERNAME" />
            <input type="password" placeholder="PASSWORD" />
            <a href="#" className="imgAnchor"><img src={loginBtnImG} className="LoginBTNimg"></img></a>
            <span className="SignUpSpan">Don't have an account? <Link to='/signup'><a href="#">Sign up</a></Link></span>
            <div className="bottom">
                <h6>&copy; 2021 nftpp.digital</h6>
            </div>
        </div>
    )
}

export default SignInSection;