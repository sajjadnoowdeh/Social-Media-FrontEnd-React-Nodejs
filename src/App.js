import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const HomePage = React.lazy(()=>import("./pages/HomePage/HomePage"))
const LoginPage = React.lazy(()=>import('./pages/LoginPage/LoginPage'))
const Profile = React.lazy(()=>import('./pages/Profile/Profile'))
const Register = React.lazy(()=>import('./pages/RegisterPage/RegisterPage'))

function App() {
    return (
        
        <>
            <Router>
                <Switch>
                    <Route exact={true} path="/" >
                        <HomePage />
                    </Route>
                    <Route exact={true} path="/login">
                        <LoginPage/>
                    </Route>
                    <Route exact={true} path="/register">
                        <Register/>
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
