import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import FriendsContainer from "./FriendsContainer";
import { compose } from "redux";
import { connect } from "react-redux";
const Nav = (props) => {
  return (
    <nav className="nav">
      
      <NavLink to={`/profile/${props.myUserId}`}>Profile</NavLink>
      <NavLink to="/dialogs">Mesaages</NavLink>
      <NavLink to="/news">News</NavLink>
      <NavLink to="/music">Music</NavLink>
      <NavLink to="/users">Find Users</NavLink>
      <NavLink to="/settings">Settings</NavLink>
      <FriendsContainer />
    </nav>
  );
};
let mapStateToProps=(state)=>{
  return{myUserId:state.auth.userId
}
}

export default compose(connect(mapStateToProps,))(Nav)
