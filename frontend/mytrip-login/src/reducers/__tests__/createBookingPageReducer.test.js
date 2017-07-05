import createBookingPageReducer from "../createBookingPageReducer";

describe("createBookingPageReducer test", () => {
  it("has a module", () => {
    expect(createBookingPageReducer).toBeTruthy();
  });

  describe("createBookingPageReducer", () => {
    it("returns a init state", () => {
      const expected = {
        email: "",
        message: ""
      };
      expect(createBookingPageReducer()).toEqual(expected);
    });

    it("sets the bookingNumber", () => {
      const expected = {
        email: "foo"
      };
      const action = {
        type: "createBookingPageActions.updateEmail",
        value: "foo"
      };
      expect(createBookingPageReducer({}, action)).toEqual(expected);
    });

    it("sets the server message", () => {
      const expected = {
        message: "foo"
      };
      const action = {
        type: "createBookingPageActions.setServerMessage",
        value: "foo"
      };
      expect(createBookingPageReducer({}, action)).toEqual(expected);
    });
  });
});
