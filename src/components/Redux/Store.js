/*  import dialogsReducer from "./Dialogs-reducer";
import friendsReducer from "./Friends-reducer";
import profileReducer from "./Profile-reducer";
let store = {
  _state: {
    profile: {
      myPostData: [
        {
          id: 1,
          message: "hello",
          like: 5,
        },
        {
          id: 2,
          message: "contact",
          like: 5,
        },
        {
          id: 3,
          message: "a need",
          like: 10,
        },
      ],
      newPostText: "post",
    },
    dialogs: {
      dialogsData: [
        { name: "Dima", id: 1, message: "hi how are you" },
        { name: "Sveta", id: 2, message: "auuuuuu" },
      ],

      newDialogMessage: "dialog",
    },
    friends:{
    friendsData: [
      { name: "Grno", id: 1, message: "hi how are you" },
      { name: "Sveta", id: 2, message: "auuuuuu" },
      { name: "Umud", id: 2, message: "auuuuuu" },
    ],
   },
  },
  _callSubscriber() {},
  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    profileReducer(this._state.profile, action);
    dialogsReducer(this._state.dialogs, action);
    friendsReducer(this._state.friends,action)
    this._callSubscriber(this._state);
  },
};

window.store = store;
export default store;  */