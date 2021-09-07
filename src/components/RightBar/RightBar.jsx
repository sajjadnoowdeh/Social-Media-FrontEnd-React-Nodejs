import React from 'react'
import OnlineUsers from '../OnlineUsers/OnlineUsers'
import { Users } from '../../dummyData'
import "./RightBar.style.css"
export default function RightBar() {
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
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
            </div>
        </div>
    )
}
