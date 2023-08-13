import { ComponentPropsWithoutRef, ReactNode } from "react";

import { PokeTypeColor } from "@/utils/type";

import { BadgeStyled } from "./styles";

export interface BadgeProps
  extends ComponentPropsWithoutRef<typeof BadgeStyled> {
  children: ReactNode;
  color?: BadgeColorType;
  typeColor?: PokeTypeColor;
}
export type BadgeColorType = "blue" | "yellow" | "gray";
