import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType } from "react-device-detect";

const CLIENTKEY = "61857702b0d62a144cc6609b";

(async () => {
  console.log(deviceType);
  const LDProvider = await asyncWithLDProvider({
    clientSideID: CLIENTKEY,
    user: {
      key: "5de6fc8b62da8a3d7fc41402624f2319",
      custom: {
        device: deviceType,
      },
    },
  });

  ReactDOM.render(
    <LDProvider>
      <App device={deviceType} />
    </LDProvider>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
