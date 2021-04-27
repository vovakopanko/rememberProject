import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { setUserLogin } from "../../redux/authReducer";

class MenuContainer extends React.Component {
  componentDidMount() {
    this.props.setUserLogin();
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

export default connect(mapStateToProps, { setUserLogin })(MenuContainer);
