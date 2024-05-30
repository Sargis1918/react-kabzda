import { connect } from "react-redux";
import Dialogs from "./Dialogs";
import { onSendMessageClick, onMessageChange } from "../Redux/Dialogs-reducer";
import { compose } from "redux";
import withAuthUseNavigate from "../../hoc/withAuthUseNavigate";
const mapStateToProps = (state) => {
  
  return {
    newDialogMessage: state.dialogs.newDialogMessage,
    dialogsData: state.dialogs.dialogsData,
    messages: state.dialogs.messages,
  };
};
export default compose(
  connect(mapStateToProps, {
    onMessageChange,
    onSendMessageClick,
  })
)(Dialogs);
