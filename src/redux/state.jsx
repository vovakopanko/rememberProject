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

export let addNewMessage = (postMessage) => {
  let newMessage = {
    id:"4",
    message:postMessage,
  }
  state.UserMessages.push(newMessage);
}
export default state;
