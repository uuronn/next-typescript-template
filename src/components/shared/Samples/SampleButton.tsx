import { css } from "@emotion/react";
import { useContext } from "react";
import { UseContext } from "../../../context/UseContext";

const button = css`
  background: #f0f0f0;
  padding: 4px;
  border: solid 1px #000;
  border-radius: 6px;
`;

export const SampleButton = () => {
  const { count, setCount } = useContext(UseContext);
  return (
    <>
      <button css={button} onClick={() => setCount(count + 1)}>
        button
      </button>
    </>
  );
};
