import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import Sidebar from "../../components/Sidebar/Sidebar"
import RightBar from "../../components/RightBar/RightBar";
import Feed from "../../components/Feed/Feed"
import "./Profile.style.css"
export default function Profile() {
    const FP = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
        <TopBar/>
        <div className="profile">
          <Sidebar />
           <div className="profileRight">
               <div className="profileRightTop">
                   <div className="profileCover">
                        <img className="profileCoverImg" src={`${FP}post/3.jpeg` }alt="" />
                        <img className="profileUserImg" src={`${FP}person/7.jpeg`} alt="" />
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
