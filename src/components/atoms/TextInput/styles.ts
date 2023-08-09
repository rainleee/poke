import { styled } from "@/styles/stitches.config";

export const TextInputStyled = styled("input", {
  border: "1px solid #E5E7EB",
  borderRadius: "8px",
  padding: "9px 20px",
  outline: "none",
  fontSize: "14px",
  "&:placeholder": {
    color: "#9CA3AF",
    fontWeight: "400",
    fontSize: "14px",
  },
});
