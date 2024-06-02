import React, { useState, useEffect, useRef } from "react";
import {useNavigate} from "react-router-dom"
const ProfileStatus = (props) => {

  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status);
  const statusInputRef = useRef(null);

  const activateEditMode = () => {
    setEditMode(true);
  };
 const navigate=useNavigate()
  const deActivateEditMode = () => {
   
     setEditMode(false);
     props.updateStatus(status);
     navigate(`/profile/${props.myUserId}`)
  
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className="profile-status-wrapper">
      <div className="profile-status" onClick={activateEditMode}>
        {props.status || "------"}
      </div>

      {editMode && (
        <div className="profile-status-value">
          <input
            ref={statusInputRef}
            className="profile-status-value-input"
            autoFocus={true}
            onBlur={deActivateEditMode}
            value={status}
            onChange={onStatusChange}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatus;
