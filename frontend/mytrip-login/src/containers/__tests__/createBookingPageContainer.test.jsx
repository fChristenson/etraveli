import React from "react";
import { mount } from "enzyme";
import CreateBookingPageContainer from "../createBookingPageContainer";
import CreateBookingPage from "../../components/createBookingPage";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import * as authUtils from "../../utils/authUtil";
import reducers from "../../reducers";
import * as myTripAPI from "../../services/myTripAPI";

jest.mock("../../services/myTripAPI");
jest.mock("../../utils/authUtil");

describe("LoginPageContainer", () => {
  it("enhances a LoginPage component with rpc call to post the login form to", () => {
    //noinspection JSAnnotator
    let store = createStore(combineReducers(reducers));
    myTripAPI.createBooking = jest.fn(() => new Promise(() => {}));

    const bookingNumber = "bookingNumber";
    const component = mount(
      <Provider store={store}><CreateBookingPageContainer /></Provider>
    );

    component.find(CreateBookingPage).props().onCreateBooking(bookingNumber);

    expect(myTripAPI.createBooking).toHaveBeenCalledWith(bookingNumber);
  });
});
