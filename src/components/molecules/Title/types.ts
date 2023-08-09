import { ComponentPropsWithoutRef, ReactNode } from "react";

import { TitleWrapper } from "./styles";

export interface TitleProps
  extends ComponentPropsWithoutRef<typeof TitleWrapper> {
  title: string;
  children?: ReactNode;
}
