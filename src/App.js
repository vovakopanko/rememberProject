import React from "react";
import Menu from "./Header/Menu/Menu";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import Friends from "./Friends/Friends";
import { Route } from "react-router-dom";
import Message from "./Message/Message.jsx";

const App = () => {
  return (
    <div className={s.app}>
      <Menu />
      <div className={s.app__content}>
        <Route path='/content' component={Content} />
        <Route path='/friends' component={Friends} />
        <Route path='/message' component={Message} />
      </div>
      <Footer />
    </div>
  );
};

export default App;
