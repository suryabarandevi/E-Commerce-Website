import React from "react";
import './css/loginsignup.css';
const LoginSignUp=()=>{
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>SIGN UP</h1>
                <div className="loginsignup-fields">
                    <input type="text" placeholder="Your Name"  />
                    <input type="email" placeholder="Email Address" />
                    <input type="password" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account</p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
            </div>
        </div>

    )
}
export default LoginSignUp;