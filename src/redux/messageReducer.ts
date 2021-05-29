const ADD_MESSAGE = "rememberMe/src/redux/messageReducers/addMessage";

type usersNamesType = {
  name: string;
  id: number;
};

type usersMessagesType = {
  message: string;
  id: number;
};

const initialstate = {
  usersNames: [
    { name: "Egor", id: 1 },
    { name: "Vova", id: 2 },
    { name: "Tanya", id: 3 },
  ] as Array<usersNamesType>,
  usersMessages: [
    { message: "Hi, How are you?", id: 1 },
    { message: "Hi, Where you been? What happened?", id: 2 },
    {
      message:
        "At me All right. I'm worked more time, because don;t called you",
      id: 3,
    },
  ] as Array<usersMessagesType>,
};

type initialStateType = typeof initialstate;

const messageReducer = (
  state = initialstate,
  action: any
): initialStateType => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        usersMessages: [
          ...state.usersMessages,
          {
            id: 4,
            message: action.newMessageBody,
          },
        ],
      };
    default:
      return state;
  }
};

type addMessageACType = {
  type: typeof ADD_MESSAGE;
  newMessageBody: string;
};

export const addMessageAC = (newMessageBody: string): addMessageACType => ({
  type: ADD_MESSAGE,
  newMessageBody,
});

export default messageReducer;
