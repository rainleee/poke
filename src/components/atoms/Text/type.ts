import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { TextStyled } from './style';

export interface TextProps extends ComponentPropsWithoutRef<typeof TextStyled> {
  children: ReactNode;
}
