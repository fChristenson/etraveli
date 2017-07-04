import {
  UPDATE_BOOKING_NUMBER,
  UPDATE_EMAIL
} from "../actions/loginPageActions";

const initState = {
  email: "",
  bookingNumber: ""
};

const loginReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.value });

    case UPDATE_BOOKING_NUMBER:
      return Object.assign({}, state, { bookingNumber: action.value });

    default:
      return state;
  }
};

export default loginReducer;
