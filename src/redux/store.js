import friendsReducer from "./friendsReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import authReducers from "./authReducer";
import { combineReducers, createStore } from "redux";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  friendsPage: friendsReducer,
  auth: authReducers,
});

let store = createStore(reducers);

window.store = store;

export default store;
