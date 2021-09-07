import React from "react";

export default function CloseFriends({user}) {
  return (
    <li className="sidebarFreind">
      <img className="sidebarFreindImg" src={user.profilePicture} alt={user.username} />
      <span className="sidebarFreindName">{user.username}</span>
    </li>
  );
}
