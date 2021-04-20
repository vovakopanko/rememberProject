import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App
          store={store}
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
      </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById("root")
);

reportWebVitals();
