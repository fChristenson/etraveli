import * as actions from "../loginPageActions";

describe("loginPageActions test", () => {
  it("has a module", () => {
    expect(actions).toBeTruthy();
  });

  describe("setLoginError", () => {
    it("returns the correct object structure", () => {
      const expected = {
        type: "loginPageActions.setLoginError",
        value: "foo"
      };
      expect(actions.setLoginError("foo")).toEqual(expected);
    });
  });

  describe("updateEmail", () => {
    it("returns the correct object structure", () => {
      const expected = {
        type: "loginPageActions.updateEmail",
        value: "foo"
      };
      expect(actions.updateEmail("foo")).toEqual(expected);
    });
  });

  describe("updateBookingNumber", () => {
    it("returns the correct object structure", () => {
      const expected = {
        type: "loginPageActions.updateBookingNumber",
        value: "foo"
      };
      expect(actions.updateBookingNumber("foo")).toEqual(expected);
    });
  });
});
