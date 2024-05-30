import React, { useEffect } from "react";
import { connect } from "react-redux";
import userIcon from "../../asetts/images/user.png";
import largeIcon from "../../asetts/images/largeIcon.webr";
import { profileThunk, getStatusThunk, updateStatusThunk, withParams, } from "../Redux/Profile-reducer";
import MyPostsContainer from "./My Posts/MyPostsContainer";
import ProfileInfo from "./Profile-info/ProfileInfo";
import withAuthUseNavigate from "../../hoc/withAuthUseNavigate";
import { compose } from "redux";
const ProfileContainer = (props) => {

let userId=props.params
useEffect(() => {
  
  props.profileThunk(userId);
  props.getStatusThunk(userId);

}, [userId], ); 

  return (
    <div className="profile">
      <ProfileInfo
        {...props}
        status = {props.status}
        profile={props.profile}
        userIcon={userIcon}
        largeIcon={largeIcon}
      />
      <MyPostsContainer />
    </div>
    
  );
};
let mapStateToProps = (state) => {
  
  return {
    profile: state.profile.profile,
    status: state.profile.status,
    myUserId:state.auth.userId,
    isAuth: state.auth.isAuth
  };
};
export default compose(
  connect(mapStateToProps, { profileThunk, getStatusThunk,updateStatusThunk }),
  withParams,
  withAuthUseNavigate
)(ProfileContainer);
