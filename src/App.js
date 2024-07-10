import React, { Component, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Navbar/Navbar";
//import ProfileContainer from "./components/Ppofile/PofileContainer";


import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
// import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import LoginPage from "./Login/LoginContainer";
import { getAuthUserData } from "./components/Redux/Auth-reducer";
import { BrowserRouter } from "react-router-dom";
import store from "./components/Redux/Redux-store";
import { Provider } from "react-redux";
import { connect } from "react-redux/es/exports";
import { compose } from "redux";
import { initializeApp } from "./components/Redux/App-reduser";
import Preloader from "./common/Preloader/Preloader";
const ProfileContainer=React.lazy(()=>import('./components/Ppofile/PofileContainer'));
const UsersContainer=React.lazy(()=>import('./components/Users/UsersContainer'));
class App extends Component {
  componentDidMount() {
    this.props.initializeApp();
    
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
                    element={<Suspense fallback={<div>loading...</div>}><ProfileContainer /></Suspense>}
                  />
                  
                  <Route path="dialogs/*" element={<DialogsContainer />} />
                  <Route path="news" element={<News />} />
                  <Route path="music" element={<Music />} />
                  <Route path="users" element={<Suspense fallback={<div>loading...</div> }><UsersContainer /></Suspense>} />
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
let AppContainer=compose(connect(mapStateToProps, { getAuthUserData, initializeApp }))(App);
const MainApp=()=>{
  return(
<React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
  )
}
export default MainApp