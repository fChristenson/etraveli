export const UPDATE_BOOKING_NUMBER =
  "createBookingPageActions.updateBookingNumber";

export const SET_SERVER_MESSAGE = "createBookingPageActions.setServerMessage";

export const updateBookingNumber = value => {
  return {
    type: UPDATE_BOOKING_NUMBER,
    value
  };
};

export const setServerMessage = value => {
  return {
    type: SET_SERVER_MESSAGE,
    value
  };
};
