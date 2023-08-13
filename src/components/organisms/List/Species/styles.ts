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
      TypeGrass: { backgroundColor: "$TypeGrass" },
      TypeWater: { backgroundColor: "$TypeWater" },
      TypePoison: { backgroundColor: "$TypePoison" },
      TypeGround: { backgroundColor: "$TypeGround" },
      TypeDark: { backgroundColor: "$TypeDark" },
      TypeFire: { backgroundColor: "$TypeFire" },
      TypeFlying: { backgroundColor: "$TypeFlying" },
      TypeBug: { backgroundColor: "$TypeBug" },
      TypeElectric: { backgroundColor: "$TypeElectric" },
      TypeFighting: { backgroundColor: "$TypeFighting" },
      TypeRock: { backgroundColor: "$TypeRock" },
      TypeSteel: { backgroundColor: "$TypeSteel" },
      TypeIce: { backgroundColor: "$TypeIce" },
      TypeNormal: { backgroundColor: "$TypeNormal" },
      TypeFairy: { backgroundColor: "$TypeFairy" },
      TypeGhost: { backgroundColor: "$TypeGhost" },
      TypeDragon: { backgroundColor: "$TypeDragon" },
      TypePsychic: { backgroundColor: "$TypePsychic" },
    },
  },
  defaultVariants: {
    typeColor: "TypeNormal",
  },
});
