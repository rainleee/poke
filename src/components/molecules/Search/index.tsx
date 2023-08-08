import React, { forwardRef, memo } from "react";

import { TextInput } from "@/components/atoms/TextInput";
import { Button } from "@/components/atoms/Button";

import { SearchProps } from "./type";
import { SearchWrapper } from "./style";

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
