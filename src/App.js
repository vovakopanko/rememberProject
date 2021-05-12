import React from "react";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import { Route, withRouter } from "react-router-dom";
import MessageContainer from "./Components/Message/MessageContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ContentContainer from "./Components/Content/ContentContainer";
import Info from "./Components/Info/Info";
import Settings from "./Components/Settings/Settings";
import Login from "./Components/Login/Login";
import { setInitialaizedApp } from "./redux/appReducer";
import MenuContainer from "./Header/Menu/MenuContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./Components/Preloader/Preloader";

class App extends React.Component {
  componentDidMount() {
    this.props.setInitialaizedApp();
  }
  render() {
    if (!this.props.initialaized) {
      return <Preloader />;
    }

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
  }
}

let mapStateToProps = (state) => ({
    initialaized: state.app.initialaized,
});

export default compose(
  withRouter,
  connect(mapStateToProps, { setInitialaizedApp })
)(App);
