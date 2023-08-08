import { ComponentPropsWithoutRef, ReactNode } from 'react';

import { TitleWrapper } from './style';

export interface TitleProps extends ComponentPropsWithoutRef<typeof TitleWrapper> {
  title: string;
  children?: ReactNode;
}
