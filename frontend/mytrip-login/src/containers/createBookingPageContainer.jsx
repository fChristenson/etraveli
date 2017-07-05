import { connect } from "react-redux";
import {
  updateEmail,
  setServerMessage
} from "../actions/createBookingPageActions";
import * as myTripAPI from "../services/myTripAPI";
import CreateBookingPage from "../components/createBookingPage";

const mapStateToProps = state => {
  return Object.assign({}, state.createBookingPageReducer);
};

const handleCreateBooking = dispatch => email => {
  myTripAPI
    .createBooking(email)
    .then(response => {
      return dispatch(setServerMessage(response.msg));
    })
    .catch(e => {
      console.error(e);
    });
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(updateEmail(e.target.value)),
    onCreateBooking: handleCreateBooking(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBookingPage);
