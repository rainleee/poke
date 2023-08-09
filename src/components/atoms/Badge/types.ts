import { ComponentPropsWithoutRef, ReactNode } from "react";

import { BadgeStyled } from "./styles";

export interface BadgeProps
  extends ComponentPropsWithoutRef<typeof BadgeStyled> {
  children: ReactNode;
  color: BadgeColorType;
}
export type BadgeColorType = "blue" | "yellow" | "gray";
