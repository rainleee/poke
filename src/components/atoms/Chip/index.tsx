import React, { forwardRef, memo } from "react";

import { ChipProps } from "./types";
import { ChipStyled } from "./styles";

export const Chip = memo(
  forwardRef<HTMLDivElement, ChipProps>(({ children, ...restProps }, ref) => {
    return (
      <ChipStyled {...restProps} ref={ref}>
        {children}
      </ChipStyled>
    );
  })
);

Chip.displayName = "Chip";
