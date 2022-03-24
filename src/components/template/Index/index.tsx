import { SampleA } from "../../shared/Samples/SampleA";
import * as styles from "./styles";

export const IndexTemplate = () => {
  return (
    <div css={styles.index}>
      <h1>index page</h1>
      <SampleA />
    </div>
  );
};
