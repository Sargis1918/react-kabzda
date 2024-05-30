import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Preloader from "../common/Preloader/Preloader";
import { connect } from "react-redux";
const mapStateToPropsForUseNavigate = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};
const withAuthUseNavigate = (Component) => {
  
  const useNavigateComponent = (props) => {
    const navigate = useNavigate();

    useEffect(() => {
      if (!props.isAuth) {
        navigate("/login");
      }
    }, [props.isAuth, navigate]);

    if (!props.isAuth) {
      return <Preloader />;
    }

    return <Component {...props} />;
  };
let ConnectedDialogsRedirectToLogin = connect(mapStateToPropsForUseNavigate)(
  useNavigateComponent
);
  return ConnectedDialogsRedirectToLogin;

  
};
export default withAuthUseNavigate;
