import { css } from "@emotion/react";
import { ComponentPropsWithRef, ForwardedRef } from "react";

export interface ContainerProps extends ComponentPropsWithRef<"div"> {
  forwardRef?: ForwardedRef<HTMLDivElement>;
}

// このコードはサンプルです
// max-widthとpaddingは適宜変えてください
const container = css`
  max-width: 1024px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Container = ({
  forwardRef,
  children,
  ...props
}: ContainerProps): JSX.Element => {
  return (
    <div ref={forwardRef} css={container} {...props}>
      {children}
    </div>
  );
};
