const ADD_MESSAGE = "ADD-MESSAGE";

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
  ]
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
            message: action.newMessageBody,
          },
        ]
      };
    default:
      return state;
  }
};

export const addMessageAC = (newMessageBody) => ({ type: ADD_MESSAGE , newMessageBody});

export default messageReducer;
