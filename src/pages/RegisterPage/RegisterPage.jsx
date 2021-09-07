import React from 'react'
import "./Register.style.css"
export default function Register() {
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
                    <input placeholder="Username" className="loginInput" type="text" />
                        <input placeholder="Email" className="loginInput" type="email" />
                        <input placeholder="Password" className="loginInput" type="password" />
                        <input placeholder="Password Again" className="loginInput" type="password" />
                        <button className="loginBtn">Sign up</button>
                        <button className="loginRegisterBtn">Sign up Account</button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
