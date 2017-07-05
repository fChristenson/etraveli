import React from "react";
import { mount } from "enzyme";
import AppContainer from "../appContainer";
import App from "../../components/app";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import * as authUtils from "../../utils/authUtil";
import reducers from "../../reducers";
import { setAuthentication } from "../../actions/appActions";

jest.mock("../../utils/authUtil");

describe("AppContainer", () => {
  it("clears session onLogout", () => {
    //noinspection JSAnnotator
    let store = createStore(combineReducers(reducers));
    store.dispatch(setAuthentication(true));
    authUtils.clearSession = jest.fn();

    const component = mount(
      <Provider store={store}><AppContainer /></Provider>
    );

    component.find("Link").forEach(link => {
      if (link.prop("to") === "/logout") link.simulate("click");
    });

    expect(authUtils.clearSession).toHaveBeenCalled();
  });
});
