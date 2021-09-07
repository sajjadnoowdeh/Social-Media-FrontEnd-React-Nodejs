import React from 'react'
import "./Login.style.css"
export default function LoginPage() {
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social Media</h3>
                    <span className="loginDesc">
                        Lorem ipsum dolor sit amet consectetur   Lorem ipsum dolor sit amet consectetur 
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Password" className="loginInput" type="password" />
                        <input placeholder="Email" className="loginInput" type="email" />
                        <button className="loginBtn">Sign up</button>
                        <span className="loginForget">Forget Password?</span>
                        <button className="loginRegisterBtn">Create Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
