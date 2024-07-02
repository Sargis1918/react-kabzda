import React from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./Login";
import { connect } from "react-redux/es/exports";
import { login } from "../components/Redux/Auth-reducer";
const LoginFormRedux = reduxForm({
    form: "login",
  })(LoginForm);
  
  const LoginContainer=({login})=>{
    
    
    const onSubmit=({email,password,rememberMe})=>{
      
        login(email,password,rememberMe)
    }
    
   
    
    
    return(
        <LoginFormRedux onSubmit={onSubmit}/>
    )
  }
const mapStateToProps=(state)=>{

  return{
  
  isAuth: state.auth.isAuth,
  myUserId:state.auth.userId
}}
  export default connect(mapStateToProps, {login})(LoginContainer)