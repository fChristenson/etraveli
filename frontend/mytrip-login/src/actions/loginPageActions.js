export const UPDATE_EMAIL = "loginPageActions.updateEmail";
export const UPDATE_BOOKING_NUMBER = "loginPageActions.updateBookingNumber";
export const SET_LOGIN_ERROR = "loginPageActions.setLoginError";

export const setLoginError = value => {
  return {
    type: SET_LOGIN_ERROR,
    value
  };
};

export const updateEmail = value => {
  return {
    type: UPDATE_EMAIL,
    value
  };
};

export const updateBookingNumber = value => {
  return {
    type: UPDATE_BOOKING_NUMBER,
    value
  };
};
