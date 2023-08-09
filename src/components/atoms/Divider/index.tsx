import React, { forwardRef, memo } from "react";

import { DividerStyled } from "./styles";
import { DividerProps } from "./types";

export const Divider = memo(
  forwardRef<HTMLHRElement, DividerProps>(
    ({ orientation = "horizontal", css, ...restProps }, ref) => {
      return (
        <DividerStyled
          ref={ref}
          css={css}
          orientation={orientation}
          {...restProps}
        />
      );
    }
  )
);

Divider.displayName = "Divider";
