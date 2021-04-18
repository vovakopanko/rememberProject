import friendsReducer from "./friendsReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST = "UPDATE-NEW-POST";
const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

let store = {
  _state: {
    // Page Messages
    messagePage: {
      usersNames: [
        { name: "Egor", id: "1" },
        { name: "Vova", id: "2" },
        { name: "Tanya", id: "3" },
      ],
      usersMessages: [
        { message: "Hi, How are you?", id: "1" },
        { message: "Hi, Where you been? What happened?", id: "2" },
        {
          message:
            "At me All right. I'm worked more time, because don;t called you",
          id: "3",
        },
      ],
      userNewMessage: "Write your message...",
    },
    // Page Friends
    friendsPage: {
      userFriends: [
        { id: "1", name: "Vova" },
        { id: "2", name: "Egor" },
        { id: "3", name: "Tanya" },
      ],
    },
    // Profile Page
    profilePage: {
      usersPosts: [
        { id: "1", name: "Vova", age: "27", comment: "Привет я Вова" },
        { id: "2", name: "Tanya", age: "25", comment: "Привет я Таня" },
        { id: "3", name: "Egor", age: "22", comment: "Привет я Егор" },
      ],
      userNewPost: "Write here your new post...",
    },
  },
  getState() {
    return this._state;
  },
  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagePage = messageReducer(this._state.messagePage, action);
    this._state.friendsPage = friendsReducer(this._state.friendsPage, action);

    this._rerenderEntireTree(this._state);
  },
  _rerenderEntireTree() {},
  subscriber(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;

window.store = store;




