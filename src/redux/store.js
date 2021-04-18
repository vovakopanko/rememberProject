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
  // Method Page Messages
  getState() {
    return this._state;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: "4",
        name: "Inkognito",
        age: "21",
        comment: this._state.profilePage.userNewPost,
      };
      this._state.profilePage.usersPosts.push(newPost);
      this._rerenderEntireTree(this._state);
      this._state.profilePage.userNewPost = "";
    } else if (action.type === UPDATE_NEW_POST) {
      this._state.profilePage.userNewPost = action.updatePost;
      this._rerenderEntireTree(this._state);
    } else if (action.type === ADD_MESSAGE) {
      let newMessage = {
        id: "4",
        message: store._state.messagePage.userNewMessage,
      };
      this._state.messagePage.usersMessages.push(newMessage);
      this._rerenderEntireTree(this._state);
      this._state.messagePage.userNewMessage = "";
    } else if (action.type === UPDATE_NEW_MESSAGE) {
      this._state.messagePage.userNewMessage = action.updateText;
      this._rerenderEntireTree(this._state);
    }
  },
  _rerenderEntireTree() {},
  subscriber(observer) {
    this._rerenderEntireTree = observer;
  },
};

export default store;

window.store = store;

export const AddPostAC = () => ({
  type: ADD_POST,
});

export const UpdateNewPostAC = (text) => ({
  type: UPDATE_NEW_POST,
  updatePost: text,
});

export const addMessageAC = () => ({ type: ADD_MESSAGE });

export const updateNewMessageAC = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  updateText: text,
});
