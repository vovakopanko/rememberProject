import React from "react";
import { connect } from "react-redux";
import Menu from "./Menu";
import { LogoutThunk } from "../../redux/authReducer";
import { AppStateType } from "../../redux/store";

type PropsType = MapStatePropsType & MapDispatchPropsType

class MenuContainer extends React.Component<PropsType> {
 
  render() {
    return (
      <div>
        <Menu login={this.props.login} LogoutThunk={this.props.LogoutThunk} />
      </div>
    );
  }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  login: state.auth.login,
  captchaUrl: state.auth.captchaUrl
});

type OwnPropsType = {

}

type MapStatePropsType = {
  login: string | null
  captchaUrl: string | null
}

type MapDispatchPropsType = {
  LogoutThunk: () => void
}

export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { LogoutThunk })(MenuContainer);
