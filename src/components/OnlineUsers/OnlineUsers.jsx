import React from "react";
import "./OnlineUsers.style.css"
export default function OnlineUsers({user}) {
  const FP = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContainer">
        <img
          className="rightbarProfileImg"
          src={FP+user.profilePicture}
          alt=""
        />
        <div className="rightbarOnline"></div>
      </div>
      <div className="rightbarUsername">{user.username}</div>
    </li>
  );
}
