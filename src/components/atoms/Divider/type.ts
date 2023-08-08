import { ComponentPropsWithoutRef } from 'react';

import { DividerStyled } from './style';

export interface DividerProps extends ComponentPropsWithoutRef<typeof DividerStyled> {
  orientation?: 'horizontal' | 'vertical';
}
