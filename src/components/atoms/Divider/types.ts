import { ComponentPropsWithoutRef } from "react";

import { DividerStyled } from "./styles";

export interface DividerProps
  extends ComponentPropsWithoutRef<typeof DividerStyled> {
  orientation?: "horizontal" | "vertical";
}
