import { Text } from "@/components/atoms/Text";
import { styled } from "@/styles/stitches.config";

export const TitleWrapper = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const TitleText = styled(Text, {
  color: "#192132",
  fontSize: "18px",
  fontWeight: "700",
});

export const ChildrenBox = styled("div", {
  display: "flex",
});
