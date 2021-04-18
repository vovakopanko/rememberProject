const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE = "UPDATE-NEW-MESSAGE";

const messageReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      let newMessage = {
        id: "4",
        message: state.userNewMessage,
      };
      state.usersMessages.push(newMessage);
      state.userNewMessage = "";
      return state;
    case UPDATE_NEW_MESSAGE:
      state.userNewMessage = action.updateText;
      return state;
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
