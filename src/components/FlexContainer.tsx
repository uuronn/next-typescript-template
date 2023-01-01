import { css } from "@emotion/react";
import { ComponentPropsWithRef } from "react";

export interface FlexContainerProps extends ComponentPropsWithRef<"div"> {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "start"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "flex-end";
  alignItems?:
    | "normal"
    | "stretch"
    | "center"
    | "start"
    | "end"
    | "flex-start"
    | "flex-end";
  flexWrap?: "nowrap" | "wrap" | "wrap-reverse";
  gap?: number;
}

export const FlexContainer = ({
  flexDirection = "row",
  justifyContent = "start",
  alignItems = "normal",
  flexWrap = "nowrap",
  gap = 0,
  children,
  ...props
}: FlexContainerProps): JSX.Element => {
  const flexContainer = css`
    display: flex;
    flex-direction: ${flexDirection};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: ${flexWrap};
    gap: ${gap}px;
  `;

  return (
    <div css={flexContainer} {...props}>
      {children}
    </div>
  );
};
