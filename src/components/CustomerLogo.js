import { withLDConsumer } from "launchdarkly-react-client-sdk";
import Heart from "./Heart";

const customerLogo = ({ flags, ldClient }) => {
  let showFeature = ldClient.variation("reactShowCustomerLogos");
  let logo = ldClient.variation("reactCustomerLogos");
  console.log(logo);

  return showFeature ? (
    <div>
      <br />
      <Heart />
      <br />
      <img src={logo} className="customer-logo" alt="customerLogo" />
    </div>
  ) : (
    <div />
  );
};

export default withLDConsumer()(customerLogo);
