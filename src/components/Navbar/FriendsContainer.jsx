
import { connect } from "react-redux";
import ActiveFriends from "./Active-friend";
let mapStateToProps = (state) => {
  return {
   
   friends: state.friends
  };
};
const FriendsContainer = connect(mapStateToProps)(ActiveFriends);
export default FriendsContainer;
