import React, { forwardRef, memo } from "react";

import { TextStyled } from "./styles";
import { TextProps } from "./types";

export const Text = memo(
  forwardRef<HTMLParagraphElement, TextProps>(
    ({ children, ...restProps }, ref) => {
      return (
        <TextStyled {...restProps} ref={ref}>
          {children}
        </TextStyled>
      );
    }
  )
);

Text.displayName = "Text";
