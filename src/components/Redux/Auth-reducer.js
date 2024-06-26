import { stopSubmit } from "redux-form";
import { authAPI } from "../../api/api";
const SET_USER_DATA = "SET_USER_DATA";
let initialState = {
  userid: null,
  email: null,
  login: null,
  isAuth: false,
};
const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        
      };
    default:
      return state;
  }
};
export const setAuthUserData = (userId, email, login, isAuth) => {
  return {
    type: SET_USER_DATA,
    data: {
      userId: userId,
      email: email,
      login: login,
      isAuth: isAuth,
    },
  };
};
export const getAuthUserData = () => {
  return (dispatch) => {
    return authAPI.me().then((response) => {
      if (response.data.resultCode === 0) {
        let { login, id, email } = response.data.data;
        dispatch(setAuthUserData(id, email, login, true));
      }
    });
  };
};
export const login = (email, password, rememberMe) => (dispatch) => {
 
  
  
    authAPI.login(email, password, rememberMe).then((response) => {
      
      if (response.data.resultCode === 0) {
      
        dispatch(getAuthUserData());
        
      }else {
        let message=response.data.messages.length>0?response.data.messages[0]:"Incorrect login or password"
        dispatch(stopSubmit("login",{_error: message, }))}
    });
  };

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
      }
    });
  };
};
export default authReducer;
