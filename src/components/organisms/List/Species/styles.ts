import { styled } from "@/styles/stitches.config";

export const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  padding: "100px",
  margin: "0 auto",
});
export const SpeciesContainer = styled("div", {
  boxShadow: "#e5e7eb 0px 1px 3px 1px",
  // border: "1px solid black",
});

export const SpeciesProfileSection = styled("div", {
  display: "flex",
  justifyContent: "center",
});
export const SpeciesContentSection = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});
export const SpeciesTypeSection = styled("div", {
  display: "flex",
  justifyContent: "flex-end",
});
