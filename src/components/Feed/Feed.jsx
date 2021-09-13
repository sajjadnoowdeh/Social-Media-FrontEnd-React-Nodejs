import React from 'react'
import Share from '../Share/Share';
import Post from '../post/Post';
import axios from "axios"
import "./Feed.style.css"
export default function Feed({username}) {
    const [posts,setPosts] = React.useState([]);
   
    React.useEffect(()=>{
        const getPosts = async ()=>{
            try {
                const {data} =username ? 
                await axios.get("/posts/profile/"+username)
                :
                await axios.get("posts/timeline/6131c5d5db559d770e78411a");
                setPosts(data)
            } catch (error) {
                console.log(error)
            }
        }
        getPosts();

    },[username])
    return (
        <div className="feed">
            <div className="feedWrapper">
                <Share/>
                {
                    posts.map((p)=>(
                        <Post 
                        key={p._id} 
                        post={p}
                      />

                    ))
                }
                
            </div>
        </div>
    )
}
