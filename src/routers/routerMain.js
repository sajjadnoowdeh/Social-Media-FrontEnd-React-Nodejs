
import React from "react"
const HomePage = React.lazy(()=>import("../pages/HomePage/HomePage"))
const Profile = React.lazy(()=>import("../pages/Profile/Profile"))

export let routers = [
    {path:"/",exact:true, Component:HomePage},
    {path:"/profile",exact:true, Component:Profile}
]

