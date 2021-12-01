import QRCode from "react-qr-code";
import { withLDConsumer } from "launchdarkly-react-client-sdk";

//Change QRURL to the URL where you'll be hosting this app
const QRURL = "https://nfinnegan.github.io/react_node_ff/";

const qrCodeHome = ({ flags, ldClient /*, ...otherProps */ }) => {
  let showFeature = ldClient.variation("reactQRCode");

  return showFeature ? (
    <div>
      <span>
        <center>Scan me!</center>
      </span>
      <br />
      <QRCode value={QRURL} />
    </div>
  ) : (
    <div></div>
  );
};

export default withLDConsumer()(qrCodeHome);
