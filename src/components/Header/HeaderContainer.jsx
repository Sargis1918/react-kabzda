import React from "react";
import Header from "./Header";
import { connect } from "react-redux/es/exports";
import { logout } from "../Redux/Auth-reducer";
class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}
const mapStateToPropos = (state) => {
  return {
    isAuth: state.auth.isAuth,
    login: state.auth.login,
  };
};
export default connect(mapStateToPropos, { logout })(HeaderContainer);
