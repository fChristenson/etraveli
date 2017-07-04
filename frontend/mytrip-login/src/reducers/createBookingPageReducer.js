import {
  UPDATE_BOOKING_NUMBER,
  SET_SERVER_MESSAGE
} from "../actions/createBookingPageActions";

const initState = {
  bookingNumber: "",
  message: ""
};

const createBookingReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_SERVER_MESSAGE:
      return Object.assign({}, state, { message: action.value });

    case UPDATE_BOOKING_NUMBER:
      return Object.assign({}, state, { bookingNumber: action.value });

    default:
      return state;
  }
};

export default createBookingReducer;
