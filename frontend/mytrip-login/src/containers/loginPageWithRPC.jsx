import { eitherFunctionOrNot } from "../../utils/generalUtils";
import { isAuthenticated, markSessionAsAuthenticated } from "../utils/authUtil";
import * as myTripAPI from "../services/myTripAPI";
import { connect } from "react-redux";
import {
  setLoginError,
  updateEmail,
  updateBookingNumber
} from "../actions/loginPageActions";
import LoginPage from "../components/loginPage";

function persistJWT(data) {
  if (data.jwt !== null) {
    markSessionAsAuthenticated(data.jwt);
  }
  return data;
}

const handleLogin = dispatch => (email, bookingNumber) => {
  //const onLogin = this.props.onLogin;
  dispatch(setLoginError({}));

  myTripAPI
    .login(email, bookingNumber)
    .then(persistJWT)
    /*.then(() =>
      eitherFunctionOrNot(onLogin).fold(
        () => {},
        () => onLogin(isAuthenticated())
      )
    )*/
    .catch(e => {
      console.error(e);
      dispatch(setLoginError(e));
    });
};

const onEmailChange = dispatch => e => {
  return dispatch(updateEmail(e.target.value));
};

const onBookingNumberChange = dispatch => e => {
  return dispatch(updateBookingNumber(e.target.value));
};

const stateToProps = state => {
  return Object.assign({}, state.loginPageReducer);
};

const dispatchToProps = dispatch => {
  return {
    onLogin: handleLogin(dispatch),
    onEmailChange: onEmailChange(dispatch),
    onBookingNumberChange: onBookingNumberChange(dispatch)
  };
};

export default connect(stateToProps, dispatchToProps)(LoginPage);
