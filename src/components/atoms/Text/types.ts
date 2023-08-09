import { ComponentPropsWithoutRef, ReactNode } from "react";

import { TextStyled } from "./styles";

export interface TextProps extends ComponentPropsWithoutRef<typeof TextStyled> {
  children: ReactNode;
}
