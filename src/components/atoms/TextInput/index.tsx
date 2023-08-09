import React, { forwardRef, memo } from "react";

import { TextInputProps } from "./types";
import { TextInputStyled } from "./styles";

export const TextInput = memo(
  forwardRef<HTMLInputElement, TextInputProps>(({ ...restProps }, ref) => {
    return <TextInputStyled type="text" ref={ref} {...restProps} />;
  })
);

TextInput.displayName = "TextInput";
