import { useContext } from "react";
import { UseContext } from "../../../context/UseContext";
import { css } from "@emotion/react";
import { SampleB } from "../Samples/SampleB";

const sampleA = css`
  background: gray;
`;

export const SampleA = () => {
  const { count, setCount } = useContext(UseContext);
  return (
    <>
      <div css={sampleA}>
        <h2>sample component A</h2>
        <p>{count}</p>
      </div>
      <SampleB />
    </>
  );
};
