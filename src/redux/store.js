import friendsReducer from "./friendsReducer";
import messageReducer from "./messageReducer";
import profileReducer from "./profileReducer";
import authReducers from "./authReducer";
import { applyMiddleware, combineReducers, createStore } from "redux";
import thunkMiddleWare from "redux-thunk"

let reducers = combineReducers({
  profilePage: profileReducer,
  messagePage: messageReducer,
  friendsPage: friendsReducer,
  auth: authReducers,
});

let store = createStore(reducers,applyMiddleware(thunkMiddleWare));

window.store = store;


export default store;
