import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

<<<<<<< HEAD
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
      <BrowserRouter>
=======
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
>>>>>>> refs/remotes/origin/master
        <App
          store={store}
          state={store.getState()}
          dispatch={store.dispatch.bind(store)}
        />
<<<<<<< HEAD
      </BrowserRouter>
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
=======
      </Provider>
    </BrowserRouter>
  </React.StrictMode >,
  document.getElementById("root")
);
>>>>>>> refs/remotes/origin/master

reportWebVitals();
