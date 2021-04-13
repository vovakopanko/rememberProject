import React from "react";
import Menu from "./Header/Menu/Menu";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import MessageContainer from "./Message/MessageContainer";
import FriendsContainer from "./Friends/FriendsContainer";



const App = ({ state,addNewMessage } ) => {
  return (
    <div className={s.app}>
      <Menu />
      <div className={s.app__content}>
        <Route
          path="/content"
          render={() => <Content postData={state.postData} />}
        />
        <Route
          path="/friends"
          render={() => <FriendsContainer userFriends={state.userFriends} />}
        />
        <Route
          path="/message"
          render={() => (
            <MessageContainer
              UsersName={state.UsersName}
              UserMessages={state.UserMessages}
              addNewMessage={addNewMessage}
            />
          )}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
