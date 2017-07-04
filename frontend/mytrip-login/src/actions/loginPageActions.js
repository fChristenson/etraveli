export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_BOOKING_NUMBER = "UPDATE_BOOKING_NUMBER";

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
