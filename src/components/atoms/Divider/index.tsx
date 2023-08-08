import React, { forwardRef, memo } from 'react';

import { DividerStyled } from './style';
import { DividerProps } from './type';

export const Divider = memo(
  forwardRef<HTMLHRElement, DividerProps>(
    ({ orientation = 'horizontal', css, ...restProps }, ref) => {
      return <DividerStyled ref={ref} css={css} orientation={orientation} {...restProps} />;
    },
  ),
);

Divider.displayName = 'Divider';
