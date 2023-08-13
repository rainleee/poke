import { Badge } from "@/components/atoms/Badge";
import { styled } from "@/styles/stitches.config";

//TODO: 반응형으로 제작
export const Wrapper = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "20px",
  padding: "100px",
  margin: "0 auto",
});
export const SpeciesContainer = styled("div", {
  boxShadow: "#e5e7eb 0px 1px 3px 1px",
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
  padding: "10px",
  justifyContent: "space-between",
  width: "100%",
  gap: "10px",
});

export const PokeTypeBadge = styled(Badge, {
  width: "100%",
  height: "28px",
  br: "3px",
  variants: {
    typeColor: {
      TypeGrass: { backgroundColor: "#42BF24" },
      TypeWater: { backgroundColor: "#6890F0" },
      TypePoison: { backgroundColor: "#994DCF" },
      TypeGround: { backgroundColor: "#E0C068" },
      TypeDark: { backgroundColor: "#705848" },
      TypeFire: { backgroundColor: "#F08030" },
      TypeFlying: { backgroundColor: "#A890F0" },
      TypeBug: { backgroundColor: "#A8B820" },
      TypeElectric: { backgroundColor: "#F8D030" },
      TypeFighting: { backgroundColor: "#C03028" },
      TypeRock: { backgroundColor: "#B8A038" },
      TypeSteel: { backgroundColor: "#B8B8D0" },
      TypeIce: { backgroundColor: "#98D8D8" },
      TypeNormal: { backgroundColor: "#A8A878" },
      TypeFairy: { backgroundColor: "#EE99AC" },
      TypeGhost: { backgroundColor: "#705898" },
      TypeDragon: { backgroundColor: "#7038F8" },
      TypePsychic: { backgroundColor: "#F85888" },
    },
  },
  defaultVariants: {
    typeColor: "TypeNormal",
  },
});
