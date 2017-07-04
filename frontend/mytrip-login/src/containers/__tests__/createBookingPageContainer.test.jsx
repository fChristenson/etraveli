import React from "react";
import { shallow } from "enzyme";
import createBookingPageContainer from "../createBookingPageContainer";
import LoginPage from "../../components/loginPage";
import * as myTripAPI from "../../services/myTripAPI";

jest.mock("../../services/myTripAPI");

describe("LoginPageContainer", () => {
  it("enhances a LoginPage component with rpc call to post the login form to", () => {
    //noinspection JSAnnotator
    myTripAPI.createBooking = jest.fn(() => new Promise(() => {}));
    const bookingNumber = "bookingNumber";
    const CreateBookingPageContainer = createBookingPageContainer(LoginPage);
    const component = shallow(<CreateBookingPageContainer />);

    component.find(LoginPage).props().onCreateBooking(bookingNumber);

    expect(myTripAPI.createBooking).toHaveBeenCalledWith(bookingNumber);
  });
});
