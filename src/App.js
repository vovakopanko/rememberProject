import React from "react";
import Menu from "./Header/Menu/Menu";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import MessageContainer from "./Message/MessageContainer";
import FriendsContainer from "./Friends/FriendsContainer";

const App = ({ state, dispatch }) => {
  return (
    <div className={s.app}>
      <Menu />
      <div className={s.app__content}>
        <Route
          path="/profile"
          render={() => (
            <Content
              usersPosts={state.profilePage.usersPosts}
              userNewPost={state.profilePage.userNewPost}
              // addNewPost={store.addNewPost.bind(store)}
              // updateNewPost={store.updateNewPost.bind(store)}
              dispatch={dispatch}
            />
          )}
        />
        <Route
          path="/friends"
          render={() => (
            <FriendsContainer userFriends={state.friendsPage.userFriends} />
          )}
        />
        <Route
          path="/message"
          render={() => (
            <MessageContainer
              usersNames={state.messagePage.usersNames}
              usersMessages={state.messagePage.usersMessages}
              userNewMessage={state.messagePage.userNewMessage}
              // addMessage={store.addMessage.bind(store)}
              // updateMessage={store.updateMessage.bind(store)}
              dispatch={dispatch}
            />
          )}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
