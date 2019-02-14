import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";

import "normalize.css/normalize.css";
import "react-dates/lib/css/_datepicker.css";

import "./firebase/firebase";
import { setTextFilter } from "./actions/filters";
import { startSetExpenses } from "./actions/expenses";
import AppRouter from "./routers/AppRouter";
import configureStore from "./stores/configureStore";
import getVisibleExpenses from "./selectors/expenses";

import "./styles/styles.scss";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store
  .dispatch(startSetExpenses())
  .then(() => ReactDOM.render(jsx, document.getElementById("app")));
