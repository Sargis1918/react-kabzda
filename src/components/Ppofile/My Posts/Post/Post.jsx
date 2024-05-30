import React from "react";
import "./Post.css";
const Post = (props) => {
   
  return (
    <div className="post">
      <div className="post__body">
        <div className="post__img">  
          <img
            src={props.img}
            alt=""
          />
        </div>
        <div className="post__item">{props.message}</div>
      </div>
      <div className="post__like">
        <span>like</span>
        {props.like}
      </div>
    </div>
  );
};

export default Post;
