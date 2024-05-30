import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header=(props)=>{
   
   return <div className="header">
      <div className="header__img">
         <img className='header__img-item' src="https://media-exp2.licdn.com/dms/image/C560BAQH9Cnv1weU07g/company-logo_200_200/0/1575479070098?e=2147483647&v=beta&t=i4Pp6zVfz5VAznPIik_ua4I75sKlu4yAdGKgHC9vpTo" alt="" />
      </div>
      
   <div className='header__login-block'>
        
  <NavLink to="/login" className='header_login'>{props.login?props.login:"Login"}</NavLink>
      
      <NavLink to="/login"><div className='header_logout'><button className='header_logout-button' onClick={props.logout} >Log out</button></div></NavLink>
      </div>
      
   </div>
}
 
export default Header