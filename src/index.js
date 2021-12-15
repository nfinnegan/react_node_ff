import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { isMobile, isIOS, isAndroid, deviceType } from "react-device-detect";

const CLIENTKEY = "61857702b0d62a144cc6609b";
//let deviceType;

const getDevice = () => {
  if (isMobile === true && isAndroid === true) {
    let deviceType = "android";
    console.log("device type is", deviceType);
  } else if (isMobile === true && isIOS === true) {
    let deviceType = "ios";
    console.log("device type is", deviceType);
  } else {
    let deviceType = "other";
    console.log("device type is", deviceType);
  }
  return deviceType;
};
(async () => {
  getDevice();
  const LDProvider = await asyncWithLDProvider({
    clientSideID: CLIENTKEY,
    user: {
      key: "5de6fc8b62da8a3d7fc41402624f2319",
      mobile: deviceType,
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
