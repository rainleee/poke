import React, { forwardRef, memo } from 'react';

import { BadgeProps } from './type';
import { BadgeStyled } from './style';

export const Badge = memo(
  forwardRef<HTMLDivElement, BadgeProps>(({ children, ...restProps }, ref) => {
    return (
      <BadgeStyled {...restProps} ref={ref}>
        {children}
      </BadgeStyled>
    );
  }),
);

Badge.displayName = 'Badge';
