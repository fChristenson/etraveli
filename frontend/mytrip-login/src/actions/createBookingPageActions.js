export const UPDATE_BOOKING_NUMBER = "UPDATE_BOOKING_NUMBER";

export const updateBookingNumber = value => {
  return {
    type: UPDATE_BOOKING_NUMBER,
    value
  };
};
