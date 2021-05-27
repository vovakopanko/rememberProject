import React from "react";
import Footer from "./Footer/Footer";
import s from "./App.module.css";
import { Redirect, Route, Switch, withRouter } from "react-router-dom";
import MessageContainer from "./Components/Message/MessageContainer";
import FriendsContainer from "./Components/Friends/FriendsContainer";
import ContentContainer from "./Components/Content/ContentContainer";
// import Info from "./Components/Info/Info";
// import Settings from "./Components/Settings/Settings";
import Login from "./Components/Login/Login";
import { setInitialaizedApp } from "./redux/appReducer";
import MenuContainer from "./Header/Menu/MenuContainer";
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./Components/Preloader/Preloader";
import { withSuspense } from "./hoc/withSuspense";
import TestPage from "./Components/TestPage/TestPage";

const Info = React.lazy(() => import("./Components/Info/Info"));
const Settings = React.lazy(() => import("./Components/Settings/Settings"));

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
          <Switch>
          <Route exact path="/" render={() => <Redirect to={"/profile"} />} />
          <Route path="/profile/:userId?" render={() => <ContentContainer />} />
          <Route path="/friends" render={() => <FriendsContainer />} />
          <Route path="/message" render={() => <MessageContainer />} />
          <Route path="/info" render={withSuspense(Info)} />
          <Route path="/settings" render={withSuspense(Settings)} />
          <Route path="/login" render={() => <Login />} />
          <Route path="/test" render={()=><TestPage/>} />
          <Route path="*" render={() => <div>Error 404. NOT FOUND</div>} />
          </Switch>
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
