import React from "react";
import { Field, reduxForm } from "redux-form";
import DialogsItems from "./Dialogs-items/Dialogs-items";
import DialogsMessages from "./Dialogs-messages/Dialogs-message";
import "./Dialogs.css";
import {DialogsTextarea} from "../../common/Field-validation/Fiield Validation";
import { maxLengthCreator, required } from "../../utilits/validators";
const maxLenght20=maxLengthCreator(20)
const Dialogs = (props) => {
  
  let dialogsData = props.dialogsData;
  let messages = props.messages;
  let addNewMessage = (values) => {
    let text=values.newDialogMessage
    props.onSendMessageClick(text);
  };
  return (
    <div className="dialogs">
      <h2 className="dialogs__title">Dialogs</h2>
      <div className="dialogs__body">
        <div className="dialogs__column dialogs__column-border">
          <DialogsItems dialogsData={dialogsData} />
        </div>
        <div className="dialogs__column ">
          <DialogsMessages messages={messages} />
        </div>
      </div>
      <AddMessageFormRedux onSubmit={addNewMessage} />
    </div>
  );
};
const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="dialogs__textarea-body">
      <Field
      validate={[required,maxLenght20]}
        component={DialogsTextarea}
        name="newDialogMessage"
        placeholder="Your message"
        className="dialogs__textarea"
      />
      <div className="dialogs__textarea-button-body">
        <button className="dialogs__textarea-button-item">Send</button>
      </div>
    </form>
  );
};
const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);
export default Dialogs;
