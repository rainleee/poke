import { ComponentPropsWithoutRef, ReactNode } from "react";

import { ChipStyled } from "./styles";

export interface ChipProps extends ComponentPropsWithoutRef<typeof ChipStyled> {
  children: ReactNode;
  color?: ChipColorType;
}
export type ChipColorType =
  | "blue"
  | "yellow"
  | "lightYellow"
  | "gray"
  | "red"
  | "green";
