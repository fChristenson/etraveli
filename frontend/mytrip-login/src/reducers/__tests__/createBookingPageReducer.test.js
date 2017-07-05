import createBookingPageReducer from "../createBookingPageReducer";

describe("createBookingPageReducer test", () => {
  it("has a module", () => {
    expect(createBookingPageReducer).toBeTruthy();
  });

  describe("createBookingPageReducer", () => {
    it("returns a init state", () => {
      const expected = {
        bookingNumber: ""
      };
      expect(createBookingPageReducer()).toEqual(expected);
    });

    it("sets the bookingNumber", () => {
      const expected = {
        email: "foo"
      };
      const action = { type: "UPDATE_EMAIL", value: "foo" };
      expect(createBookingPageReducer({}, action)).toEqual(expected);
    });

    it("sets the server message", () => {
      const expected = {
        message: "foo"
      };
      const action = { type: "SET_SERVER_MESSAGE", value: "foo" };
      expect(createBookingPageReducer({}, action)).toEqual(expected);
    });
  });
});
