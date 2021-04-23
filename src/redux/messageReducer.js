const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const initialstate = {
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
};

const messageReducer = (state = initialstate, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        usersMessages: [
          ...state.usersMessages,
          {
            id: "4",
            message: state.userNewMessage,
          },
        ],
        userNewMessage: "",
      };
    case UPDATE_NEW_MESSAGE:
      return {
        ...state,
        userNewMessage: action.updateText,
      };
    default:
      return state;
  }
};

export const addMessageAC = () => ({ type: ADD_MESSAGE });

export const updateNewMessageAC = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  updateText: text,
});

export default messageReducer;
