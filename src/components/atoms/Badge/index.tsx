import React, { forwardRef, memo } from "react";

import { BadgeProps } from "./types";
import { BadgeStyled } from "./styles";

export const Badge = memo(
  forwardRef<HTMLDivElement, BadgeProps>(({ children, ...restProps }, ref) => {
    return (
      <BadgeStyled {...restProps} ref={ref}>
        {children}
      </BadgeStyled>
    );
  })
);

Badge.displayName = "Badge";
