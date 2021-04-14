let rerenderEntireTree = () => {
};

let state = {
  UsersName: [
    { name: "Egor", id: "1" },
    { name: "Vova", id: "2" },
    { name: "Tanya", id: "3" },
  ],
  UserMessages: [
    { message: "Hi, How are you?", id: "1" },
    { message: "Hi, Where you been? What happened?", id: "2" },
    {
      message:
        "At me All right. I'm worked more time, because don;t called you",
      id: "3",
    },
  ],
  newTextInfo: "Write your message...",

  userFriends: [
    { id: "1", name: "Vova" },
    { id: "2", name: "Egor" },
    { id: "3", name: "Tanya" },
  ],
  postData: [
    { id: "1", name: "Vova", age: "27", comment: "Привет я Вова" },
    { id: "2", name: "Tanya", age: "25", comment: "Привет я Таня" },
    { id: "3", name: "Egor", age: "22", comment: "Привет я Егор" },
  ],
};

export let addNewMessage = () => {
  let newMessage = {
    id: "4",
    message: state.newTextInfo,
  };
  state.UserMessages.push(newMessage);
  rerenderEntireTree(state);
};

export let addNewPost = (postNewMessage) => {
  let newPost = {
    id: "4",
    name: "Inkognito",
    age: "21",
    comment: postNewMessage,
  };
  state.postData.push(newPost);
  state.newTextInfo = "";
  rerenderEntireTree(state);
};

export let updateNewPost = (updateText) => {
  state.newTextInfo = updateText;
  rerenderEntireTree(state);
};

export default state;

export const subscriber = (observer) => {
  rerenderEntireTree = observer;
};

