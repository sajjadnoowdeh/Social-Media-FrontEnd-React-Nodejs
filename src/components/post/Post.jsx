import React from 'react'
import { MoreVert } from '@material-ui/icons'
import { Users } from '../../dummyData'
import "./Post.style.css"
export default function Post({post}) {
    const [like,setLike] = React.useState(post.like)
    const [isLike,setIsLike] =React.useState(false)

    const likeHandler = ()=>{
        setLike(isLike ? like-1:like+1);
        setIsLike(!isLike)
    }
    return (
      <>
        <div className="post">
                <div className="postWrapper">
                    <div className="postTop">
                        <div className="postTopLeft">
                            <img className="postProfileImg" src={Users.find((user)=>user.id === post.userId).profilePicture} alt="" />
                            <span className="postUsername">{Users.filter((user)=>user.id === post.userId)[0].username}</span>
                            <span className="postData">{post.date}</span>
                        </div>
                        <div className="postTopRight">
                           <MoreVert/>
                        </div>
                    </div>
                    <div className="postCenter">
                        <span className="postText">{post?.desc}</span>
                        <img  className="postImg" src={post.photo} alt="" />
                    </div>
                    <div className="postBottom">
                        <div className="postBottomLeft">
                            <img className="likeIcon" src="assets/heart.png" onClick={likeHandler} alt="" />
                            <img className="likeIcon" src="assets/like.png" onClick={likeHandler} alt="" />
                            <span className="postLikeCounter" >{like} people like it</span>
                        </div>
                        <div className="postBottomRight">
                            <div className="postCommentText">{post.comment} comments</div>
                        </div>
                    </div>
                </div>  
            </div>
      </>
    )
}
