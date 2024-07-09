import { combineReducers, compose} from "redux";
import { configureStore, } from '@reduxjs/toolkit';
import authReducer from "./Auth-reducer";
import dialogsReducer from "./Dialogs-reducer";
import friendsReducer from "./Friends-reducer";
import profileReducer from "./Profile-reducer";
import usersReducer from "./Users-reducer";
import thunkMiddleware from "redux-thunk"
import { reducer as formReducer } from "redux-form";
import appReducer from "./App-reduser";

let reducers = combineReducers({
   profile: profileReducer,
   dialogs: dialogsReducer,
   friends: friendsReducer,
   usersPage: usersReducer,
   auth: authReducer,
   form: formReducer,
   app: appReducer

})
 
 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = configureStore({
   reducer: reducers,
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunkMiddleware),
   devTools: composeEnhancers,
 });
 Object.defineProperty(window, 'store', {
   value: store,
   writable: true,
   configurable: true
 });
export default store;