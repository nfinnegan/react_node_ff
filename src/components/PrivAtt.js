import { withLDConsumer } from "launchdarkly-react-client-sdk";

const privAttr = ({ flags, ldClient }) => {
  let showFeature = ldClient.variation("private-attribute-test");

  return showFeature ? (
    <div>can see feature</div>
  ) : (
    <div>cannot see feature</div>
  );
};

export default withLDConsumer()(privAttr);
