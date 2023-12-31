import React, { forwardRef, memo } from "react";

import { InputProps } from "./types";
import { InputStyled } from "./styles";

export const Input = memo(
  forwardRef<HTMLInputElement, InputProps>(({ ...restProps }, ref) => {
    return <InputStyled ref={ref} {...restProps} />;
  })
);

Input.displayName = "Input";
