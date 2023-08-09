import { styled } from "@/styles/stitches.config";

export const DividerStyled = styled("hr", {
  backgroundColor: "#B8B6D7",
  variants: {
    orientation: {
      horizontal: { width: "100%", height: "1px" },
      vertical: { width: "1px", height: "100%" },
    },
  },
});
