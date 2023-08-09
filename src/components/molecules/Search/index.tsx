import React, { forwardRef, memo } from "react";

import { TextInput } from "@/components/atoms/TextInput";
import { Button } from "@/components/atoms/Button";

import { SearchProps } from "./types";
import { SearchWrapper } from "./styles";

export const Search = memo(
  forwardRef<HTMLDivElement, SearchProps>(
    ({ ButtonText, ...restProps }, ref) => {
      return (
        <SearchWrapper ref={ref}>
          <TextInput {...restProps} />
          <Button type="submit">{ButtonText}</Button>
        </SearchWrapper>
      );
    }
  )
);

Search.displayName = "Search";
