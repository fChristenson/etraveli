import React from "react";
import { shallow } from "enzyme";
import CreateBookingPage from "../CreateBookingPage";

describe("<CreateBookingPage />", () => {
  it("renders a form", () => {
    const component = shallow(<CreateBookingPage />);
    expect(component.find("form").length).toBe(1);
  });

  it("renders an input field for booking number", () => {
    const component = shallow(<CreateBookingPage />);
    const names = [];
    component.find("input").forEach(i => names.push(i.prop("name")));
    expect(names.find(name => name === "bookingNumber")).toBeDefined();
  });

  it("renders a submit button", () => {
    const component = shallow(<CreateBookingPage />);
    expect(component.find("button").prop("type")).toBe("submit");
  });

  describe("onSubmit", () => {
    it("triggers callback onLogin", () => {
      const onCreateBooking = jest.fn();
      const component = shallow(
        <CreateBookingPage onCreateBooking={onCreateBooking} />
      );
      const event = { preventDefault() {} };
      component.find("form").simulate("submit", event);
      expect(onCreateBooking).toHaveBeenCalledWith(
        component.state().bookingNumber
      );
    });
  });
});
