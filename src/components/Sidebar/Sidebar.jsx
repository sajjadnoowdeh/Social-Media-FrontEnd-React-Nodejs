import React from 'react'
import RssFeedIcon from '@material-ui/icons/RssFeed';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import GroupIcon from '@material-ui/icons/Group';
import VideocamIcon from '@material-ui/icons/Videocam';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import FeedbackIcon from '@material-ui/icons/Feedback';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import "./Sidebar.style.css"
export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarItem">
                        <RssFeedIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Feed</span>
                    </li>
                    <li className="sidebarItem">
                        <ChatBubbleIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Chats</span>
                    </li>
                    <li className="sidebarItem">
                        <VideocamIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Videos</span>
                    </li>
                    <li className="sidebarItem">
                        <GroupIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Groups</span>
                    </li>
                    <li className="sidebarItem">
                        <BookmarkIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">BookMarks</span>
                    </li>
                    <li className="sidebarItem">
                        <FeedbackIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Feed</span>
                    </li>
                    <li className="sidebarItem">
                        <QuestionAnswerIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Questions</span>
                    </li>
                    <li className="sidebarItem">
                        <WorkIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Jobs</span>
                    </li>
                    <li className="sidebarItem">
                        <EventIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Events</span>
                    </li>
                    <li className="sidebarItem">
                        <FiberManualRecordIcon className="sidebarIcon"/>
                        <span className="sidebarItemListText">Courses</span>
                    </li>
                </ul>
                <button className="sidebarButton">Show More</button>
                <hr className="sidebarHr"/>
                <ul className="sidebarFriendList">
                    <li className="sidebarFreind">
                        <img className="sidebarFreindImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFreindName">Sajjad</span>
                    </li>
                    <li className="sidebarFreind">
                        <img className="sidebarFreindImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFreindName">Sajjad</span>
                    </li>
                    <li className="sidebarFreind">
                        <img className="sidebarFreindImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFreindName">Sajjad</span>
                    </li>
                    <li className="sidebarFreind">
                        <img className="sidebarFreindImg" src="/assets/person/2.jpeg" alt="" />
                        <span className="sidebarFreindName">Sajjad</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
