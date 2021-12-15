//import osmo from "assets/osmo_black.png";
//import toggle from "./images/toggle.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import QRCode from "./components/qrCode";
import { useFlags } from "launchdarkly-react-client-sdk";
import HeaderLDLogo from "./components/HeaderLogo";
import SpinnyLogo from "./components/SpinnyLogo";
import Toggle from "./components/Toggle";
import { isAndroid, isIOS } from "react-device-detect";

function App({ device }) {
  console.log("app.js mobile is", device);
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const { reactBackgroundColor } = useFlags();

  useEffect(() => {
    setHeaderStyle("gray-app-header");
    // findMobileDevice();
    const updateBackGroundColor = () => {
      // Sets the className to "purple-app-header", "blue-app-header", etc.
      const headerStyle = reactBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle);

      return reactBackgroundColor;
    };
    updateBackGroundColor();
  }, [reactBackgroundColor]);

  // const findMobileDevice = () => {
  //   if (device === true && isIOS === true) {
  //     console.log("is mobile is true");
  //   } else {
  //     console.log("is mobile is false");
  //   }
  // };

  return (
    <div className={headerStyle}>
      <div className="black-header">
        <HeaderLDLogo />
      </div>
      <div className={headerStyle}>
        <QRCode />
        <br />
        <br />
        {/* <img src={osmo} className="App-logo" alt="logo" /> */}
        <SpinnyLogo />
        <br />
        <br />
        {/* <img src={toggle} className="toggle-logo" alt="toggle" /> */}
        <Toggle />
      </div>
    </div>
  );
}

export default App;
