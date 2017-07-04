export const UPDATE_EMAIL = "loginPageActions.updateEmail";
export const UPDATE_BOOKING_NUMBER = "loginPageActions.updateBookingNumber";

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
