import * as actions from "../createBookingPageActions";

describe("createBookingPageActions test", () => {
  it("has a module", () => {
    expect(actions).toBeTruthy();
  });

  describe("updateEmail", () => {
    it("returns the correct object structure", () => {
      const expected = {
        type: "createBookingPageActions.updateEmail",
        value: "foo"
      };
      expect(actions.updateEmail("foo")).toEqual(expected);
    });
  });

  describe("setServerMessage", () => {
    it("returns the correct object structure", () => {
      const expected = {
        type: "createBookingPageActions.setServerMessage",
        value: "foo"
      };
      expect(actions.setServerMessage("foo")).toEqual(expected);
    });
  });
});
