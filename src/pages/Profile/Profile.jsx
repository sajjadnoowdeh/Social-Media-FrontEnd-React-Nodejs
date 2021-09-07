import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import Sidebar from "../../components/Sidebar/Sidebar"
import RightBar from "../../components/RightBar/RightBar";
import Feed from "../../components/Feed/Feed"
import "./Profile.style.css"
export default function Profile() {
    return (
        <>
        <TopBar/>
        <div className="profile">
          <Sidebar />
           <div className="profileRight">
               <div className="profileRightTop">
                   <div className="profileCover">
                        <img className="profileCoverImg" src="/assets/post/3.jpeg" alt="" />
                        <img className="profileUserImg" src="/assets/person/7.jpeg" alt="" />
                   </div>
                 
               </div>
               <div className="profileInfo">
                   <div className="profileInfoName">sajjad noowdeh</div>
                   <span className="profileInfoDesc">Hello my friend</span>
               </div>
               <div className="profileRightBottom">
                  <Feed />
                  <RightBar profile/>
               </div>
           </div>
          
        </div>
     </>
    )
}
