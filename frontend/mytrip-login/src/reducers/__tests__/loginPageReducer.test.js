import loginPageReducer from "../loginPageReducer";

describe("loginPageReducer test", () => {
  it("has a module", () => {
    expect(loginPageReducer).toBeTruthy();
  });

  describe("loginPageReducer", () => {
    it("returns a init state", () => {
      const expected = {
        bookingNumber: "",
        email: ""
      };
      expect(loginPageReducer()).toEqual(expected);
    });

    it("sets the bookingNumber", () => {
      const expected = {
        bookingNumber: "foo"
      };
      const action = { type: "UPDATE_BOOKING_NUMBER", value: "foo" };
      expect(loginPageReducer({}, action)).toEqual(expected);
    });

    it("sets the email", () => {
      const expected = {
        email: "foo"
      };
      const action = { type: "UPDATE_EMAIL", value: "foo" };
      expect(loginPageReducer({}, action)).toEqual(expected);
    });
  });
});
