import React from "react";
import { reduxForm } from "redux-form";
import LoginForm from "./Login";
import { connect } from "react-redux/es/exports";
import { login } from "../components/Redux/Auth-reducer";
import {useNavigate} from "react-router-dom"
const LoginFormRedux = reduxForm({
    form: "login",
  })(LoginForm);
  
  const LoginContainer=(props)=>{
   
    const navigate= useNavigate()
    const onSubmit=(formData)=>{
      
        props.login(formData.email,formData.password,formData.rememberMe)
    }
    
    if(props.isAuth){navigate (`/profile/${props.myUserId}`)}
    
    
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