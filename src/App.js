import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Navbar";
import ProfileContainer from "./components/Ppofile/PofileContainer";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/LoginContainer";
import { getAuthUserData } from "./components/Redux/Auth-reducer";

import { connect } from "react-redux/es/exports";
import { compose } from "redux";
import { initializeApp } from "./components/Redux/App-reduser";
import Preloader from "./common/Preloader/Preloader";
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
    console.log(this.props);
  }
  render() { 
    if(!this.props.initialized) {
      return<Preloader/>}
    return (
      <div className="app-wrapper">
        {this.props.auth === false ? (
          <div className="login_wrapper">
            <HeaderContainer />
            <Routes>
              <Route path="/*" element={<LoginPage />} />
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </div>
        ) : (
          <div>
            <HeaderContainer />
            <div className="app-wrapper__content">
              <div className="nav_wrapper">
                <Nav />
              </div>
              <div className="app_wrapper_routes">
                <Routes>
                  <Route
                    path="profile/:userid"
                    element={<ProfileContainer />}
                  />
                  
                  <Route path="dialogs/*" element={<DialogsContainer />} />
                  <Route path="news" element={<News />} />
                  <Route path="music" element={<Music />} />
                  <Route path="users" element={<UsersContainer />} />
                  <Route path="settings" element={<Settings />} />
                </Routes>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  
  return {
     auth: state.auth.isAuth,
    initialized:state.app.initialized
  };
};
export default compose(connect(mapStateToProps, { getAuthUserData, initializeApp }))(App);
