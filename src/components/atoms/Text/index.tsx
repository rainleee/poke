import React, { forwardRef, memo } from 'react';

import { TextStyled } from './style';
import { TextProps } from './type';

export const Text = memo(
  forwardRef<HTMLParagraphElement, TextProps>(({ children, ...restProps }, ref) => {
    return (
      <TextStyled {...restProps} ref={ref}>
        {children}
      </TextStyled>
    );
  }),
);

Text.displayName = 'Text';
