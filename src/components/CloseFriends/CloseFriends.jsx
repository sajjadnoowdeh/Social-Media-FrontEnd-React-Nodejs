import React from "react";

export default function CloseFriends({user}) {
  const FP = process.env.REACT_APP_PUBLIC_FOLDER;
  return (
    <li className="sidebarFreind">
      <img className="sidebarFreindImg" src={FP+user.profilePicture} alt={user.username} />
      <span className="sidebarFreindName">{user.username}</span>
    </li>
  );
}
