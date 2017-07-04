import {
  UPDATE_BOOKING_NUMBER,
  UPDATE_EMAIL,
  SET_LOGIN_ERROR
} from "../actions/loginPageActions";

const initState = {
  email: "",
  bookingNumber: "",
  error: {}
};

const loginReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_LOGIN_ERROR:
      return Object.assign({}, state, { error: action.value });

    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.value });

    case UPDATE_BOOKING_NUMBER:
      return Object.assign({}, state, { bookingNumber: action.value });

    default:
      return state;
  }
};

export default loginReducer;
