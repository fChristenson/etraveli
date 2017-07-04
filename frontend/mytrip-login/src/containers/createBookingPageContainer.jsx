import { connect } from "react-redux";
import {
  updateBookingNumber,
  setServerMessage
} from "../actions/createBookingPageActions";
import * as myTripAPI from "../services/myTripAPI";
import CreateBookingPage from "../components/createBookingPage";

const mapStateToProps = state => {
  return Object.assign({}, state.createBookingPageReducer);
};

const handleCreateBooking = dispatch => bookingNumber => {
  myTripAPI
    .createBooking(bookingNumber)
    .then(response => {
      return dispatch(setServerMessage(response.msg));
    })
    .catch(e => {
      console.error(e);
    });
};

const mapDispatchToProps = dispatch => {
  return {
    onChange: e => dispatch(updateBookingNumber(e.target.value)),
    onCreateBooking: handleCreateBooking(dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateBookingPage);
