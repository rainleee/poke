import React, { forwardRef, memo } from 'react';

import { TextInputProps } from './type';
import { TextInputStyled } from './style';

export const TextInput = memo(
  forwardRef<HTMLInputElement, TextInputProps>(({ ...restProps }, ref) => {
    return <TextInputStyled type="text" ref={ref} {...restProps} />;
  }),
);

TextInput.displayName = 'TextInput';
