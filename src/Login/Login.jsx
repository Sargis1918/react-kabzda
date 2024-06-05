import React from "react";
import "./Login.css";
import { Field} from "redux-form";
import { LoginTextarea } from "../common/Field-validation/Fiield Validation";
import { required } from "../utilits/validators";

const LoginForm = (props) => {
  
  return (
    
  <div className="login">
    
   
    <form className="login_form" onSubmit={props.handleSubmit}>
      <div className="login_header">Login</div>
      <div className="login_input">
        
        <Field className="login_b"  validate={[required]} name="email" component={LoginTextarea} type="text" placeholder="Login" />
      
      </div>

      <div className="password_input">
      
        <Field
        className="login_a"
        validate={[required]}
          name="password"
          component={LoginTextarea}
          type="password"
          placeholder="Password"
        />
      </div>
      <div className="rememberME_column">
      <span className="remember_input">
        
        <Field name="rememberMe" component="input" type="checkbox" />
        <label>Remember me</label>
        {props.error&&<span className="error_submit">{props.error}</span>}
      </span>
      <div className="login_button">
        <button type="submit">Login</button>
       
      </div> 
      </div>
      
    </form>
    </div>
  );
};





export default LoginForm;
