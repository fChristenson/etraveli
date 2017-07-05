export const UPDATE_EMAIL = "createBookingPageActions.updateEmail";

export const SET_SERVER_MESSAGE = "createBookingPageActions.setServerMessage";

export const updateEmail = value => {
  return {
    type: UPDATE_EMAIL,
    value
  };
};

export const setServerMessage = value => {
  return {
    type: SET_SERVER_MESSAGE,
    value
  };
};
