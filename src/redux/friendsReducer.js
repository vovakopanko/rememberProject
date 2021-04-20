const initialstate = {
  userFriends: [
    { id: "1", name: "Vova" },
    { id: "2", name: "Tanya" },
    { id: "3", name: "Egor" },]
}


const friendsReducer = (state = initialstate, action) => {
  return state;
};

export default friendsReducer;
