import React from "react";
import "./Dialogs-message.css";
const DialogsMessage = (props) => {
   
  return (
    <div className="dialogs__messages-body">
      <div className="dialogs__img">
        <img
          className="dialogs__img-item"
          src={props.photoUrl}
          alt=""
        />
        <span className="dialogs__name">{props.name}</span>
      </div>
      <div className="dialogs__message-body">
        <div className="dialogs__message-item">{props.messages}</div>
      </div>
    </div>
  );
};
const DialogsMessages = (props) => {


 let messageData= props. messages.map( dialMes => <DialogsMessage name={dialMes.name} messages={dialMes.message} photoUrl={dialMes.photoUrl} key={dialMes.id}/>);

       
       
  
  return (
    <div>
      {messageData}
      
    </div>
  );
};

export default DialogsMessages;
