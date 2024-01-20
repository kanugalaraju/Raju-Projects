import "./post.css"
import React from "react"
import {FiMoreVertical } from "react-icons/fi"
import { Users } from "../../Data"
export default function Post(post){
    return(
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src="Dhoni.jpg" alt="" className="postProfileImg"/>
                        <span className="postUserName">Dhoni</span>
                        <span className="postDate">7 Min Ago</span>
                    </div>
                    <div className="postTopRight">
                        <FiMoreVertical />
                    </div>

                </div>
                <div className="postCenter">
                    <span className="postText">Life is very short be happy always</span>
                    <img src="Dhoni1.jpg" alt="" className="postImg"/>
                </div>
                <div className="postBottom"></div>
                <div className="postButtomLeft">
                    <img src="Like.jpg" alt="" className="likeIcon"/>
                    <img src="Heart.jpg" alt="" className="likeIcon"/>
                   
                    <span className="postlikeCounter">123645647 people like it</span>

                </div>
                <div className="postButtomRight">
                    <span className="postCommentText">7170 Comments</span>
                </div>
                </div> 
        
        </div>
    )
}