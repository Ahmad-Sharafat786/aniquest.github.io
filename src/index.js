import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { CookiesProvider } from "react-cookie";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-toastify/dist/ReactToastify.css";
import 'react-tooltip/dist/react-tooltip.css'
import "./index.css";
import "./assets/styles/style.css";
import "./assets/styles/components-style.css";
import "./App.css";
import "./assets/styles/main.css";
import "./assets/styles/muzamal.css";
import '../src/assets/styles/ahmad.css'
import "./assets/styles/loader.css";
import "./assets/styles/mediaquery.css";
import "./assets/js/jquery.slimscroll";
import "./assets/js/app.js";
import "./assets/js/common.js";
import "./loader.js";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

if (process.env.NODE_ENV === "production") {
  console.log = function () { };
}

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <App />        
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
