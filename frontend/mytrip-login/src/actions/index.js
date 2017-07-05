import * as createBookingPageActions from "./createBookingPageActions";
import * as loginPageActions from "./loginPageActions";
import * as appActions from "./appActions";

export default {
  updateBookingPageBookingNumber: createBookingPageActions.updateBookingNumber,
  updateLoginPageEmail: loginPageActions.updateEmail,
  updateLoginPageBookingNumber: loginPageActions.updateBookingNumber,
  setAuthentication: appActions.setAuthentication
};
