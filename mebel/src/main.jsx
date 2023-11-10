import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// todtify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// redux
import { Provider } from "react-redux";
import { store } from "./redux/app/store.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
    <ToastContainer position="top-center" />
  </Provider>
);
