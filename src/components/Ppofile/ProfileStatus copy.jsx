import React, { useState } from "react";
import {useNavigate} from "react-router-dom"

const ProfileStatusWithHooks = (props) => {
 let [editMode,setEditMode]= useState(false)
 let [status,setStatus]= useState(props.status)
let navigate=useNavigate()
 const DeActvateEditMode=()=>{
  setEditMode(false)
  
  props.updateStatus(status);
for(let i=0;i<2;i++){
  navigate(`/profile/${props.myUserId}`)
}
}
const activateEditMode=()=>{
  setEditMode(true)
}
const onStatusChange = (e) => {
  setStatus(e.currentTarget.value);
};
  return (
    <div className="profile-status-wrapper">
      <div className="profile-status"onClick={activateEditMode}>
        {props.status || "------"}
      </div>

      {editMode && (
        <div className="profile-status-value">
          <input
            
            className="profile-status-value-input"
            autoFocus={true}
            onChange={onStatusChange}
          onBlur={DeActvateEditMode}
            value={status}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
