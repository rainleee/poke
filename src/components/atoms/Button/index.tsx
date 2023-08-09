import React, { forwardRef, memo } from "react";

import { ButtonProps } from "./types";
import { ButtonStyled } from "./styles";

export const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, ...restProps }, ref) => {
      return (
        <ButtonStyled {...restProps} ref={ref}>
          {children}
        </ButtonStyled>
      );
    }
  )
);

Button.displayName = "Button";
