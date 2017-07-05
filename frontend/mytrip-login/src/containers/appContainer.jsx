import App from "../components/app";
import { connect } from "react-redux";
import { setAuthentication } from "../actions/appActions";
import { clearSession } from "../utils/authUtil";

const handleLogout = dispatch => () => {
  clearSession();
  return dispatch(setAuthentication(false));
};

const mapStateToProps = state => {
  return Object.assign({}, state.appReducer);
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: handleLogout(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
