import { styled } from "@/styles/stitches.config";

export const BadgeStyled = styled("div", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  color: "white",
  fontSize: "12px",
  fontWeight: "600",
  width: "23px",
  height: "23px",
  br: "50%",
  variants: {
    color: {
      blue: { backgroundColor: "#6165FF" },
      yellow: { backgroundColor: "#FFC061" },
      gray: { backgroundColor: "#F0F1EF" },
    },
  },
  defaultVariants: {
    color: "blue",
  },
});
