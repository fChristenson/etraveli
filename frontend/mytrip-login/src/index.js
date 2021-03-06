import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/appContainer";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import reducers from "./reducers";

const store = createStore(
  combineReducers(reducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
import "./index.css";

ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.getElementById("root")
);
