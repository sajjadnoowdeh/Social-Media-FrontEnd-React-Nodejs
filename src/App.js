import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ContextAuth } from './context/AuthContext';
import { Redirect } from 'react-router';
const HomePage = React.lazy(()=>import("./pages/HomePage/HomePage"))
const LoginPage = React.lazy(()=>import('./pages/LoginPage/LoginPage'))
const Profile = React.lazy(()=>import('./pages/Profile/Profile'))
const Register = React.lazy(()=>import('./pages/RegisterPage/RegisterPage'))
function App() {
    const {user} = useContext(ContextAuth)
    return (
        
        <>
            <Router>
                <Switch>
                    <Route exact={true} path="/" >
                       {user ? <HomePage />: <Redirect to="/register" />}
                        <HomePage />
                    </Route>
                    <Route exact={true} path="/login">
                        {user ? <Redirect to="/"/> : <LoginPage/>}
                        
                    </Route>
                    <Route exact={true} path="/register">
                        {user ? <Redirect to="/"/> :     <Register/>}
                    
                    </Route>
                    <Route exact={true} path="/profile/:username">
                       <Profile/>
                    </Route>
                </Switch>
            </Router>
            
        </>
    )
}

export default App
