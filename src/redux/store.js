let store = {
  state: {
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
  addMessage() {
    let newMessage = {
      id: "4",
      message: store.state.messagePage.userNewMessage,
    };
    store.state.messagePage.usersMessages.push(newMessage);
    this.rerenderEntireTree(this.state);
  },
  updateMessage(updateText) {
    this.state.messagePage.userNewMessage = updateText;
    this.rerenderEntireTree(this.state);
  },
  // Method Page Profile
  addNewPost() {
    let newPost = {
      id: "4",
      name: "Inkognito",
      age: "21",
      comment: this.state.profilePage.userNewPost,
    };
    this.state.profilePage.usersPosts.push(newPost);
    this.state.profilePage.userNewPost = "";
    this.rerenderEntireTree(this.state);
  },
  updateNewPost(updatePost) {
    this.state.profilePage.userNewPost = updatePost;
    this.rerenderEntireTree(this.state);
  },
  // Other method
  subscriber(observer) {
    this.rerenderEntireTree = observer;
  },
  rerenderEntireTree() {},
};

export default store;
