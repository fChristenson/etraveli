import { SET_AUTHENTICATION } from "../actions/appActions";
import { isAuthenticated } from "../utils/authUtil";

const initState = {
  isAuthenticated: isAuthenticated()
};

const appReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case SET_AUTHENTICATION:
      return Object.assign({}, state, { isAuthenticated: action.value });

    default:
      return state;
  }
};

export default appReducer;
