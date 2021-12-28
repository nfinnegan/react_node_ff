import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { asyncWithLDProvider } from "launchdarkly-react-client-sdk";
import { deviceType, osName } from "react-device-detect";
//^^import the react-device-detect npm package and do an install locally
const CLIENTKEY = "61857702b0d62a144cc6609b";

(async () => {
  console.log(deviceType, osName);
  const LDProvider = await asyncWithLDProvider({
    clientSideID: CLIENTKEY,
    user: {
      key: "5de6fc8b62da8a3d7fc41402624f2319",
      //dynamically set these custom attributes using the deviceType and osName selectors from the npm package
      custom: {
        device: deviceType,
        operatingSystem: osName,
      },
    },
  });

  ReactDOM.render(
    <LDProvider>
      {/* create two props to pass to App.js file and give them the values of each selector so that we 
      can use the values in our App.js file */}
      <App device={deviceType} os={osName} />
    </LDProvider>,
    document.getElementById("root")
  );
})();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
