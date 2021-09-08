
import React from "react"
const HomePage = React.lazy(()=>import("../pages/HomePage/HomePage"))
const Profile = React.lazy(()=>import("../pages/Profile/Profile"))
const LoginPage = React.lazy(()=>import('../pages/LoginPage/LoginPage'))
const Register =  React.lazy(()=>import('../pages/RegisterPage/RegisterPage'))

export let routers = [
    {path:"/",exact:true, Component:HomePage},
    {path:"/profile",exact:true, Component:Profile},
     {path:"/profile",exact:true, Component:Profile},
      {path:"/profile",exact:true, Component:Profile}
]

