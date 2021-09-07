import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import Sidebar from "../../components/Sidebar/Sidebar"
import RightBar from "../../components/RightBar/RightBar";
import Feed from "../../components/Feed/Feed"
import "./homePage.style.css"
export default function Home() {
    return (
        <>
           <TopBar/>
           <div className="homeContainer">
             <Sidebar />
             <Feed />
             <RightBar />
           </div>
        </>
    )
}
