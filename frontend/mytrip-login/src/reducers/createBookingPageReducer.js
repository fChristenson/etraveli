import { UPDATE_BOOKING_NUMBER } from "../actions/createBookingPageActions";

const initState = {
  bookingNumber: ""
};

const createBookingReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case UPDATE_BOOKING_NUMBER:
      return Object.assign({}, state, { bookingNumber: action.value });

    default:
      return state;
  }
};

export default createBookingReducer;
