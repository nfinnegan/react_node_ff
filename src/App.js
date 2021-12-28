//import osmo from "assets/osmo_black.png";
//import toggle from "./images/toggle.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import QRCode from "./components/qrCode";
import { useFlags } from "launchdarkly-react-client-sdk";
import HeaderLDLogo from "./components/HeaderLogo";
import SpinnyLogo from "./components/SpinnyLogo";
import Toggle from "./components/Toggle";
//import { isAndroid, isIOS } from "react-device-detect";

function App({ device, os }) {
  console.log(device, os);
  const [userDevice, setUserDevice] = useState("");
  const [userOS, setOS] = useState("");
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const { reactBackgroundColor } = useFlags();

  useEffect(() => {
    setUserDevice(device);
    setOS(os);
    setHeaderStyle("gray-app-header");

    const updateBackGroundColor = () => {
      // Sets the className to "purple-app-header", "blue-app-header", etc.
      const headerStyle = reactBackgroundColor + "-app-header";
      setHeaderStyle(headerStyle);

      return reactBackgroundColor;
    };
    updateBackGroundColor();
  }, [reactBackgroundColor]);

  return (
    <div className={headerStyle}>
      <div className="black-header">
        <HeaderLDLogo />
      </div>
      <div className={headerStyle}>
        <QRCode />
        <br />
        <br />
        <div>Current device is {userDevice}</div>
        <div>Current operating system is {userOS}</div>
        <br />
        <SpinnyLogo />
        <br />
        <br />

        <Toggle />
      </div>
    </div>
  );
}

export default App;
