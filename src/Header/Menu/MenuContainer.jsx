import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { setUserLogin, LogoutThunk } from "../../redux/authReducer";

class MenuContainer extends React.Component {
  componentDidMount() {
    this.props.setUserLogin();
  }
  render() {
    return (
      <div>
        <Menu login={this.props.login} LogoutThunk={this.props.LogoutThunk}/>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  id: state.auth.id,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { setUserLogin, LogoutThunk})(MenuContainer);
