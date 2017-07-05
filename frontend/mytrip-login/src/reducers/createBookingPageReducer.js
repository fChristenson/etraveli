import {
  UPDATE_EMAIL,
  SET_SERVER_MESSAGE
} from "../actions/createBookingPageActions";

const initState = {
  email: "",
  message: ""
};

const createBookingReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_SERVER_MESSAGE:
      return Object.assign({}, state, { message: action.value });

    case UPDATE_EMAIL:
      return Object.assign({}, state, { email: action.value });

    default:
      return state;
  }
};

export default createBookingReducer;
