import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { AppStateType } from "../redux/store";

type mapStateToPropsType = {
  isAuth: boolean
}

type PropsType = mapStateToPropsType

let mapStateToProps = (state: AppStateType): mapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component: any) => {
  class RedirectComponent extends React.Component<PropsType> {
    render() {
      if (!this.props.isAuth) return <Redirect to="/login" />;
      return <Component {...this.props} />;
    }
  }
  let AuthRedirectComponent = connect<mapStateToPropsType, unknown, unknown, AppStateType>(mapStateToProps)(RedirectComponent);

  return AuthRedirectComponent;
};
