import React from "react";
import "./Dialogs-items.css";
import { NavLink } from "react-router-dom";
const DialogsItem = (props) => {
   
  let path = "/dialogs/" + props.id;
  return (
    <div className="dialog__body">
      <NavLink to={path} className="dialogs__item">
        {props.name}
        <div className="dialog__img-body">
          <img
            className="dialog__img"
            src={props.photoUrl}
            alt=""
          />
        </div>
      </NavLink>
    </div>
  );
};
const DialogsItems = (props) => {
  let dialogsElements = props.dialogsData.map((d) => (
    <DialogsItem photoUrl={d.photoUrl} name={d.name} id={d.id} key={d.id} />
  ));
  return (
    <div  className="dialogs__items">
      {dialogsElements}
    </div>
  );
};
export default DialogsItems;
