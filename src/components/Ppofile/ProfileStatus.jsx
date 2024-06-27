import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setStatus] = useState(props.status)
  const navigate = useNavigate();

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    for (let i = 0; i < 3; i++) {
    props.updateStatus(status);
    
      navigate(`/profile/${props.myUserId}`);
    }
  };

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  };

  return (
    <div className="profile-status-wrapper">
      <div className="profile-status" onClick={activateEditMode}>
        {props.status || "------"}
      </div>

      {editMode && (
        <div className="profile-status-value">
          <input
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
