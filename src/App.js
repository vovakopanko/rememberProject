import React from "react";
import Menu from "./Header/Menu/Menu";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import MessageContainer from "./Message/MessageContainer";
import FriendsContainer from "./Friends/FriendsContainer";

const App = ({ store }) => {
  return (
    <div className={s.app}>
      <Menu />
      <div className={s.app__content}>
        <Route
          path="/profile"
          render={() => (
            <Content
              usersPosts={store.state.profilePage.usersPosts}
              userNewPost={store.state.profilePage.userNewPost}
              addNewPost={store.addNewPost.bind(store)}
              updateNewPost={store.updateNewPost.bind(store)}
            />
          )}
        />
        <Route
          path="/friends"
          render={() => (
            <FriendsContainer
              userFriends={store.state.friendsPage.userFriends}
            />
          )}
        />
        <Route
          path="/message"
          render={() => (
            <MessageContainer
              usersNames={store.state.messagePage.usersNames}
              usersMessages={store.state.messagePage.usersMessages}
              userNewMessage={store.state.messagePage.userNewMessage}
              addMessage={store.addMessage.bind(store)}
              updateMessage={store.updateMessage.bind(store)}
            />
          )}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
