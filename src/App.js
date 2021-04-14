import React from "react";
import Menu from "./Header/Menu/Menu";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import MessageContainer from "./Message/MessageContainer";
import FriendsContainer from "./Friends/FriendsContainer";



const App = ({ state,addNewMessage,addNewPost,updateNewPost } ) => {
  return (
    <div className={s.app}>
      <Menu />
      <div className={s.app__content}>
        <Route
          path="/content"
          render={() => <Content postData={state.postData} addPost={addNewPost} />}
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
              newTextInfo={state.newTextInfo}
              updateNewPost={updateNewPost}
            />
          )}
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
