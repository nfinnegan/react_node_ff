//import osmo from "assets/osmo_black.png";
//import toggle from "./images/toggle.png";
import "./App.css";
import React, { useState, useEffect } from "react";
import QRCode from "./components/qrCode";
import { useFlags } from "launchdarkly-react-client-sdk";
import HeaderLDLogo from "./components/HeaderLogo";
import SpinnyLogo from "./components/SpinnyLogo";
import Toggle from "./components/Toggle";
import PrivAtt from "./components/PrivAtt";
import CustomerLogo from "./components/CustomerLogo";

//pass device and os in as props
function App({ device, os, email }) {
  //create two new useState to save the users device type and operating system
  const [userDevice, setUserDevice] = useState(device);
  const [userOS, setOS] = useState(os);
  const [headerStyle, setHeaderStyle] = useState("gray-app-header");
  const { reactBackgroundColor } = useFlags();

  useEffect(() => {
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
        <CustomerLogo />
        <QRCode />
        <br />
        <br />

        <br />

        <Toggle />
      </div>
    </div>
  );
}

export default App;
