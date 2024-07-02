import {applyMiddleware, combineReducers, createStore,compose} from "redux";
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
 const store = createStore(reducers,  composeEnhancers( applyMiddleware(thunkMiddleware)));
window.store=store;
export default store;