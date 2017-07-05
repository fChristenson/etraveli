import loginPageReducer from "../loginPageReducer";

describe("loginPageReducer test", () => {
  it("has a module", () => {
    expect(loginPageReducer).toBeTruthy();
  });

  describe("loginPageReducer", () => {
    it("returns a init state", () => {
      const expected = {
        bookingNumber: "",
        email: "",
        error: {}
      };
      expect(loginPageReducer()).toEqual(expected);
    });

    it("sets the bookingNumber", () => {
      const expected = {
        bookingNumber: "foo"
      };
      const action = {
        type: "loginPageActions.updateBookingNumber",
        value: "foo"
      };
      expect(loginPageReducer({}, action)).toEqual(expected);
    });

    it("sets the email", () => {
      const expected = {
        email: "foo"
      };
      const action = { type: "loginPageActions.updateEmail", value: "foo" };
      expect(loginPageReducer({}, action)).toEqual(expected);
    });

    it("sets the error", () => {
      const expected = {
        error: "foo"
      };
      const action = { type: "loginPageActions.setLoginError", value: "foo" };
      expect(loginPageReducer({}, action)).toEqual(expected);
    });
  });
});
