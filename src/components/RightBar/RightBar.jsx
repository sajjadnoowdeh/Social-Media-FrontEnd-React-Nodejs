import React from 'react'
import OnlineUsers from '../OnlineUsers/OnlineUsers'
import { Users } from '../../dummyData'
import "./RightBar.style.css"
export default function RightBar({user}) {
    const FP = process.env.REACT_APP_PUBLIC_FOLDER;
    const HomeRightBar = ()=>{
        return(
            <>
            <div className="birthdayContainer">
                    <img className="birthdayImg" src="/assets/gift.png" alt="" />
                    <span className="birthdayText"><b>Pola Faster </b>and <b>and 3 friends</b> birthday </span>
                </div>
                <img className="rightbarAd" src="/assets/ad.png" alt="" />
                <h4 className="rightbarTitle">
                  Online Friends
                </h4>
                <ul className="rightbarFriendList">
                   {
                       Users.map((user)=>(
                           <OnlineUsers
                              key={user.id}
                              user={user}
                           />
                       ))
                   }
                </ul>
            </>
        )
    }
    const ProfileRightBar =()=>{
        return(
            <>
               <h4 className="rightbarTitle">User Information</h4>
               <div className="rightbarInfo">
                     <div className="rightbarInofoItem">
                         <span className="rightbarInfoKey">city:</span>
                         <span className="rightbarInfoValue">{user.city}</span>
                     </div>
                     <div className="rightbarInofoItem">
                         <span className="rightbarInfoKey">from:</span>
                         <span className="rightbarInfoValue">{user.from}</span>
                     </div>
                     <div className="rightbarInofoItem">
                         <span className="rightbarInfoKey">Relationship:</span>
                         <span className="rightbarInfoValue">{
                           user.relationship === 1 ? "Single": user.relationship === 1 ?"Married":
                           "-"
                         }</span>
                     </div>
               </div>
               <h4 className="rightbarTitle">User Friends</h4>
               <div className="rightbarFollowings">
                   <div className="rightbarFollowing">
                       <img className="rightbarFollowingImg" src={FP+"person/1.jpeg"} alt="" />
                       <span className="rightbarFllowingName">Jane cener</span>
                   </div>
                   <div className="rightbarFollowing">
                       <img className="rightbarFollowingImg" src={FP+"person/2.jpeg"} alt="" />
                       <span className="rightbarFllowingName">Jane cener</span>
                   </div>
                   <div className="rightbarFollowing">
                       <img className="rightbarFollowingImg" src={FP+"person/3.jpeg"} alt="" />
                       <span className="rightbarFllowingName">Jane cener</span>
                   </div>

                   <div className="rightbarFollowing">
                       <img className="rightbarFollowingImg" src={FP+"person/4.jpeg"} alt="" />
                       <span className="rightbarFllowingName">Jane cener</span>
                   </div>
                   <div className="rightbarFollowing">
                       <img className="rightbarFollowingImg" src={FP+"person/5.jpeg"} alt="" />
                       <span className="rightbarFllowingName">Jane cener</span>
                   </div>
                   <div className="rightbarFollowing">
                       <img className="rightbarFollowingImg" src={FP+"person/5.jpeg"} alt="" />
                       <span className="rightbarFllowingName">Jane cener</span>
                   </div>
                  
               </div>
            </>
        )
    }
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
               {user ? <ProfileRightBar /> : <HomeRightBar />} 
            </div>
        </div>
    )
}
