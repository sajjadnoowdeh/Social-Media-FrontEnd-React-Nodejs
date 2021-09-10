import React from 'react'
import TopBar from '../../components/TopBar/TopBar'
import Sidebar from "../../components/Sidebar/Sidebar"
import RightBar from "../../components/RightBar/RightBar";
import Feed from "../../components/Feed/Feed"
import { useParams } from 'react-router';
import axios from "axios"
import "./Profile.style.css"
export default function Profile() {
    const FP = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = React.useState({});
    const {username} = useParams();

    React.useEffect(() => {
        const getUser = async () => {
          try {
            const { data } = await axios.get(`/users?username=${username}`);
            setUser(data);
          } catch (error) {
            console.log(error);
          }
        };
        getUser();
      }, [username]);
    return (
        <>
        <TopBar/>
        <div className="profile">
          <Sidebar />
           <div className="profileRight">
               <div className="profileRightTop">
                   <div className="profileCover">
                        <img className="profileCoverImg" src={user.coverPicture || FP+"person/noCover.png"} alt="" />
                        <img className="profileUserImg" src={user.profilePicture || FP+"person/noAvatar.png"} alt="" />
                   </div>
                 
               </div>
               <div className="profileInfo">
                   <div className="profileInfoName">{user.username}</div>
                   <span className="profileInfoDesc">{user.desc}</span>
               </div>
               <div className="profileRightBottom">
                  <Feed username={username}/>
                  <RightBar user={user}/>
               </div>
           </div>
          
        </div>
     </>
    )
}
