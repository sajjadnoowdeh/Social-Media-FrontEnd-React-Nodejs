import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { ContextAuth } from '../../context/AuthContext';
import {loignCall} from "../../apiCalls"

import "./Login.style.css"
export default function LoginPage() {
    const {user,isFetching,error,dispatch} = useContext(ContextAuth)
    const email = useRef();
    const password = useRef();
    const handleSubmit = (e)=>{
       e.preventDefault()
       loignCall({email:email.current.value,password:password.current.value},dispatch)
 
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
                        <button className="loginBtn" disabled={isFetching}>{isFetching ? <CircularProgress size={"29px"}  /> : "Sign up"}</button>
                        <span className="loginForget">Forget Password?</span>
                        <button className="loginRegisterBtn">{isFetching ? <CircularProgress size={"29px"} /> : "Create Account"}</button>
                    </form>
                </div>
            </div>
            
        </div>
    )
}
