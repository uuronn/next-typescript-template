import { ComponentPropsWithRef } from "react";
import { css } from "@emotion/react";
import { breakpoints } from "~/styles/themes/breakpoints";

type Device = {
  base: number;
  tablet?: number;
  pc?: number;
};

export interface GridProps extends ComponentPropsWithRef<"div"> {
  cols?: number | Device;
  space?: number | Device;
}

/**
 * Grid Component
 * @example
 * // No responsive
 * <GridContainer cols={1}>
 *   Hello
 * </GridContainer>
 * @example
 * // Responsive
 * <GridContainer cols={{ base: 1, tablet: 2, pc: 3}}>
 *   <div>Hello</div>
 *   <div>Hello</div>
 *   <div>Hello</div>
 * </GridContainer>
 */
export const GridContainer = ({
  cols = 1,
  space = 0,
  children,
  ...props
}: GridProps): JSX.Element => {
  const isColsNumber = typeof cols === "number";
  const isSpaceNumber = typeof space === "number";

  const gridContainer = css`
    display: grid;
    grid-template-columns: repeat(
      ${isColsNumber ? cols : cols.base},
      minmax(0, 1fr)
    );
    place-items: center;
    gap: ${isSpaceNumber ? space : space.base}px;
    @media (min-width: ${breakpoints.sm}px) {
      grid-template-columns: repeat(
        ${isColsNumber ? cols : cols.tablet},
        minmax(0, 1fr)
      );
      gap: ${isSpaceNumber ? "inherit" : space.tablet}px;
    }
    @media (min-width: ${breakpoints.md}px) {
      grid-template-columns: repeat(
        ${isColsNumber ? cols : cols.pc},
        minmax(0, 1fr)
      );
      gap: ${isSpaceNumber ? "inherit" : space.pc}px;
    }
  `;

  return (
    <div css={gridContainer} {...props}>
      {children}
    </div>
  );
};
