import React from "react";
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus" 
import "./Profile-info.css";
const ProfileInfo = (props) => {

   if (!props.profile) {
    
       return <Preloader/>;
       
       
   }
   
      return (
        <div className="profile-info">
         
          <div className="profile-info__img">
            <img
              src={props.profile.photos.large!=null? props.profile.photos.large:props.largeIcon}
              alt=""
              className="profile-info__img-item"
            />
          </div>
          <div>
            <ProfileStatus myUserId={props.params.userid} status={props.status} updateStatus={props.updateStatusThunk}/>
            </div>
          <div className="profile-info__info-body">
            
            <div className="profile-info__avatar">
              <img
                src={props.profile.photos.small !=null? props.profile.photos.small:props.userIcon }
                alt=""
                className="profile-info__avatar-item"
              />
            </div>
            <div className="profile-info__name-info">
              <h2 className="profile-info__fullname">
                {props.profile.fullName}
              </h2>
              <span>
                about me:
                {props.profile.aboutMe}
              </span>
              <span>looking for a job:{props.profile.lookingForAJob}</span>
              <span>
                looking for a job description:
                {props.profile.lookingForAJobDescription}
              </span>
            </div>
          </div>
        </div>
      );
   
};

export default ProfileInfo;
