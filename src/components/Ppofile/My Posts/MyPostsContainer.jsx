import React from "react";
import "./MyPosts.css";

import MyPosts from "./My Posts";
import { connect } from "react-redux";
import { compose } from "redux";
import { addPost,  } from "../../Redux/Profile-reducer";
let mapStateToProps = (state) => {
 
  return {
    myPostData: state.profile.myPostData,

    
  };
};


export default compose(connect(mapStateToProps,{addPost}))(MyPosts)
