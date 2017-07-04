import * as createBookingPageActions from "./createBookingPageActions";
import * as loginPageActions from "./loginPageActions";

export default {
  updateBookingPageBookingNumber: createBookingPageActions.updateBookingNumber,
  updateLoginPageEmail: loginPageActions.updateEmail,
  updateLoginPageBookingNumber: loginPageActions.updateBookingNumber
};
