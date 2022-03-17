import { withLDConsumer } from "launchdarkly-react-client-sdk";
import heart from "../images/assets/heart.png";

const showHeart = ({ flags, ldClient }) => {
  let showFeature = ldClient.variation("reactShowHeart");

  return showFeature ? (
    <div>
      <img src={heart} className="heart" alt="heart" />
    </div>
  ) : (
    <div />
  );
};

export default withLDConsumer()(showHeart);
