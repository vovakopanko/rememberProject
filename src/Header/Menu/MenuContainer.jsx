import axios from "axios";
import React from "react";
import { setUserData } from "../../redux/authReducer";
import { connect } from "react-redux";
import Menu from "./Menu";

class MenuContainer extends React.Component {
  componentDidMount() {
    axios
      .get("https://social-network.samuraijs.com/api/1.0/auth/me", {
        withCredentials: true,
      })
      .then((Response) => {
        let { id, email, login } = Response.data.data;
        this.props.setUserData(id, email, login);
      });
  }
  render() {
    return (
      <div>
        <Menu login={this.props.login} />
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  login: state.auth.login,
  id: state.auth.id,
});

export default connect(mapStateToProps, { setUserData })(MenuContainer);
