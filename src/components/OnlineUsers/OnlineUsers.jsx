import React from "react";
import "./OnlineUsers.style.css"
export default function OnlineUsers({user}) {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={user.profilePicture}
          alt=""
        />
        <div className="rightbarOnline"></div>
      </div>
      <div className="rightbarUsername">{user.username}</div>
    </li>
  );
}
