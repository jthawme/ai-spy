import * as React from "react";
import * as ReactDOM from "react-dom";

import { Provider } from "react-redux";

import App from "./components/App/App";

import store from "./store/store";

import "./styles/defaults.scss";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
