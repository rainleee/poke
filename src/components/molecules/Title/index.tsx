import React, { forwardRef, memo } from 'react';

import { TitleProps } from './type';
import { TitleWrapper, TitleText, ChildrenBox } from './style';

export const Title = memo(
  forwardRef<HTMLDivElement, TitleProps>(({ title, children, ...restProps }, ref) => {
    return (
      <TitleWrapper {...restProps} ref={ref}>
        <TitleText>{title}</TitleText>
        {children && <ChildrenBox>{children}</ChildrenBox>}
      </TitleWrapper>
    );
  }),
);

Title.displayName = 'Title';
