import React from "react";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import { Route } from "react-router-dom";
import MessageContainer from "./Components/Message/MessageContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ContentContainer from "./Components/Content/ContentContainer";
import Info from "./Components/Info/Info";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/Login/Login";
import MenuContainer from "./Header/Menu/MenuContainer";

const App = () => {
  return (
    <div className={s.app}>
      <MenuContainer />
      <div className={s.app__content}>
        <Route path="/profile/:userId?" render={() => <ContentContainer />} />
        <Route path="/friends" render={() => <FriendsContainer />} />
        <Route path="/message" render={() => <MessageContainer />} />
        <Route path="/info" render={() => <Info />} />
        <Route path="/settings" render={() => <Settings />} />
        <Route path="/login" render={() => <Login />} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
