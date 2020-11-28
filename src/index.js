import React from "react";
import ReactDOM from "react-dom";
import App from "./view/App";
import GlobalStyles from "./styles/global.styles";
import { Provider } from "react-redux";
import store from "./state/store/configure.store";

const rootElement = document.getElementById("root");

ReactDOM.render(

  <>
    <Provider store={store}>
      <App />
    </Provider>
    <GlobalStyles />
  </>,
  rootElement
);
