import { Sample } from "../../shared/Sample";
import { useContext } from "react";
import { UseContext } from "../../../context/UseContext";
import * as styles from "./styles";

export const IndexTemplate = () => {
  const context = useContext(UseContext);
  return (
    <div css={styles.index}>
      <h1>index page</h1>
      <div>
        <p>sampleContext: {context.title}</p>
        <p>sampleContext: {context.number}</p>
      </div>
      <Sample />
    </div>
  );
};
