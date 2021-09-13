import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react';
import { ContextAuth } from '../../context/AuthContext';
import {loginCall} from "../../context/AuthActions"
import "./Login.style.css"
export default function LoginPage() {
    const {user,isFetching,error,dispatch} = useContext(ContextAuth)
    const email = useRef();
    const password = useRef();
    const handleSubmit = (e)=>{
       e.preventDefault()
       loginCall({email:email.current.value,password:password.current.value},dispatch)
       console.log(password.current.value)
    }
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
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="Email" ref={email} className="loginInput" type="email" />
                        <input placeholder="Password" ref={password} className="loginInput" type="password" />
                        <button className="loginBtn">Sign up</button>
                        <span className="loginForget">Forget Password?</span>
                        <button className="loginRegisterBtn">Create Account</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
