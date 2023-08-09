import { ComponentPropsWithoutRef, ReactNode } from "react";

import { ButtonStyled } from "./styles";

export interface ButtonProps
  extends ComponentPropsWithoutRef<typeof ButtonStyled> {
  children: ReactNode;
}
