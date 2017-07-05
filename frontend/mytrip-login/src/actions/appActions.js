export const SET_AUTHENTICATION = "appActions.setAuthentication";

export const setAuthentication = value => {
  return {
    type: SET_AUTHENTICATION,
    value
  };
};
