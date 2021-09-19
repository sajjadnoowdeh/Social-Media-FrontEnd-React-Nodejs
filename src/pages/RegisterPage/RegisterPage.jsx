import React from 'react'
import axios from "axios"
import { useRef } from 'react'
import "./Register.style.css"
export default function Register() {
    const username = useRef();
    const email = useRef()
    const passowrd = useRef();
    const passowordAgain = useRef();
    const handleSubmit = async(e)=>{
        if(passowrd.current.value !== passowordAgain.current.value){
            passowrd.current.setCustomValidity("password not equal with passowordAgain")
        }else{
            const user = {
                username:username,
                email:email,
                passowrd:passowrd
            }
           let res = await axios.post("auth/register",user);
           console.log(res)
        }
        e.preventDefault()
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
                <form className="loginRight" onSubmit={handleSubmit}>
                    <div className="loginBox">
                    <input required placeholder="Username" ref={username} className="loginInput" type="text" />
                        <input required placeholder="Email" ref={email} className="loginInput" type="email" />
                        <input required placeholder="Password" ref={passowrd} className="loginInput" type="password" />
                        <input required placeholder="Password Again" ref={passowordAgain} className="loginInput" type="password" />
                        <button className="loginBtn">Sign up</button>
                        <button className="loginRegisterBtn">Sign up Account</button>
                    </div>
                </form>
            </div>
            
        </div>
    )
}
