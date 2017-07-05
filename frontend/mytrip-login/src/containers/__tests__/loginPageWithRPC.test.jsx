import React from "react";
import { shallow, mount } from "enzyme";
import LoginPageWithRPC from "../loginPageWithRPC";
import LoginPage from "../../components/loginPage";
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
    myTripAPI.login = jest.fn(() => new Promise(() => {}));

    const email = "email";
    const bookingNumber = "bookingNumber";
    const component = mount(
      <Provider store={store}><LoginPageWithRPC /></Provider>
    );

    component.find(LoginPage).props().onLogin(email, bookingNumber);

    expect(myTripAPI.login).toHaveBeenCalledWith(email, bookingNumber);
  });
});
