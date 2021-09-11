import React from "react";
import { MoreVert } from "@material-ui/icons";
import { format } from "timeago.js";
import {Link} from "react-router-dom"
import "./Post.style.css";
import axios from "axios";
export default function Post({ post }) {
  const [like, setLike] = React.useState(post.likes.length);
  const [isLike, setIsLike] = React.useState(false);
  const [user, setUser] = React.useState({});
  const FP = process.env.REACT_APP_PUBLIC_FOLDER;
  const likeHandler = () => {
    setLike(isLike ? like - 1 : like + 1);
    setIsLike(!isLike);
  };
  React.useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await axios.get(`/users?userId=${post.userId}`);
        setUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [post.userId]);
  return (
    <>
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
                <Link to={`/profile/${user.username}`}>
                    <img
                
                        className="postProfileImg"
                        src={user.profilePicture || FP + "person/noAvatar.png"}
                        alt=""
                   />
                </Link>
            
              <span className="postUsername">{user.username}</span>
              <span className="postData">{format(post.createdAt)}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={FP + post.img} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <img
                className="likeIcon"
                src={`${FP}heart.png`}
                onClick={likeHandler}
                alt=""
              />
              <img
                className="likeIcon"
                src={`${FP}like.png`}
                onClick={likeHandler}
                alt=""
              />
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postBottomRight">
              <div className="postCommentText">{post.comment} comments</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
