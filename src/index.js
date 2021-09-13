import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Suspense } from "react";
import ProviderAuth from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";
import "./index.css";
ReactDOM.render(
  <ProviderAuth>
    <Suspense
      fallback={
        <div className="spinner-load">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      }
    >
      <App />
    </Suspense>
  </ProviderAuth>,

  document.getElementById("root")
);
