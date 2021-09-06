import React from 'react'
import { MoreVert } from '@material-ui/icons'
import "./Post.style.css"
export default function Post() {
    return (
      <>
        <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                            <span className="postUsername">sajjad noowdeh</span>
                            <span className="postData">5 min after</span>
                        </div>
                        <div className="postTopRight">
                           <MoreVert/>
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">Hey! it is first post</span>
                        <img  className="postImg" src="/assets/post/1.jpeg" alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className="likeIcon" src="assets/heart.png" alt="" />
                            <img className="likeIcon" src="assets/like.png" alt="" />
                            <span className="postLikeCounter">32 people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <div className="postCommentText">9 comments</div>
                        </div>
                    </div>
                </div>  
            </div>
      </>
    )
}
