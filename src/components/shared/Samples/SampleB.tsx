import { useContext } from "react";
import { UseContext } from "../../../context/UseContext";
import { css } from "@emotion/react";
import { SampleButton } from "./SampleButton";

const sampleB = css`
  background: green;
`;

export const SampleB = () => {
  const { count, setCount } = useContext(UseContext);
  return (
    <div css={sampleB}>
      <h2>sample component B</h2>
      <p>{count}</p>
      <SampleButton />
    </div>
  );
};
