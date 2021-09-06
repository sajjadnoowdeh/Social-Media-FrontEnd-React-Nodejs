import React from 'react'
import Share from '../Share/Share';
import Post from '../Post/Post';
import "./Feed.style.css"
export default function Feed() {
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {/* <Post /> */}
            </div>
        </div>
    )
}
