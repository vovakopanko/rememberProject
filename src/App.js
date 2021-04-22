import React from "react";
import Menu from "./Header/Menu/Menu";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import MessageContainer from "./Message/MessageContainer";
import FriendsContainer from "./Friends/FriendsContainer";
import ContentContainer from "./Content/ContentContainer";
<<<<<<< HEAD
import Info from "./Info/Info";
import Settings from "./Settings/Settings";
=======
>>>>>>> refs/remotes/origin/master

const App = ({ state, dispatch }) => {
  return (
    <div className={s.app}>
      <Menu />
      <div className={s.app__content}>
        <Route
          path="/profile"
          render={() => (
            <ContentContainer
              usersPosts={state.profilePage.usersPosts}
              userNewPost={state.profilePage.userNewPost}
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
              dispatch={dispatch}
            />
          )}
        />
        <Route path="/info" render={() => <Info />} />
        <Route path="/settings" render={() => <Settings />} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
