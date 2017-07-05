import * as actions from "../appActions";

describe("appActions test", () => {
  it("has a module", () => {
    expect(actions).toBeTruthy();
  });

  describe("setAuthentication", () => {
    it("returns the correct object structure", () => {
      const expected = {
        type: "appActions.setAuthentication",
        value: "foo"
      };
      expect(actions.setAuthentication("foo")).toEqual(expected);
    });
  });
});
