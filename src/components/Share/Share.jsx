import React from 'react'
import PermMediaIcon from '@material-ui/icons/PermMedia';
import LabelIcon from '@material-ui/icons/Label';
import RoomIcon from '@material-ui/icons/Room';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import "./Share.style.css"
export default function Share() {
    return (
        <div className="share">
            <div className="shareWrapper">
                <div className="shareTop">
                    <img src="/assets/person/1.jpeg" className="shareProfileImg" alt="" />
                    <input 
                     type="text"
                     placeholder="what is your mind Safak?" 
                     className="shareInput" />
                </div>
                <hr className="shareHr"/>
                <div className="shareBottom">
                    <div className="shareOptions">
                       <div className="shareOption">
                           <PermMediaIcon htmlColor="tomato" className="shareIcon" />
                           <div className="shareOptionText">Vedio or Music</div>
                       </div>
                    </div>
                    <div className="shareOptions">
                       <div className="shareOption">
                           <LabelIcon  htmlColor="blue" className="shareIcon" />
                           <div className="shareOptionText">Tags</div>
                       </div>
                    </div>
                    <div className="shareOptions">
                       <div className="shareOption">
                           <RoomIcon htmlColor="green" className="shareIcon" />
                           <div className="shareOptionText">Locations</div>
                       </div>
                    </div>
                    <div className="shareOptions">
                       <div className="shareOption">
                           <EmojiEmotionsIcon htmlColor="goldenrod" className="shareIcon" />
                           <div className="shareOptionText">Filieeng</div>
                       </div>
                    </div>
                <button className="shareButton">Share</button>
                </div>
            </div>
        </div>
    )
}
