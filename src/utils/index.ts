import { PokeTypeColor } from "./type";

export const handlePokeTypeColor = (color: string): PokeTypeColor => {
  let typeColor: PokeTypeColor = "TypeNormal";

  switch (color) {
    case "풀":
      typeColor = "TypeGrass";
      break;
    case "물":
      typeColor = "TypeWater";
      break;
    case "독":
      typeColor = "TypePoison";
      break;
    case "땅":
      typeColor = "TypeGround";
      break;
    case "악":
      typeColor = "TypeDark";
      break;
    case "불꽃":
      typeColor = "TypeFire";
      break;
    case "비행":
      typeColor = "TypeFlying";
      break;
    case "벌레":
      typeColor = "TypeBug";
      break;
    case "전기":
      typeColor = "TypeElectric";
      break;
    case "격투":
      typeColor = "TypeFighting";
      break;
    case "바위":
      typeColor = "TypeRock";
      break;
    case "강철":
      typeColor = "TypeSteel";
      break;
    case "얼음":
      typeColor = "TypeIce";
      break;
    case "강철":
      typeColor = "TypeNormal";
      break;
    case "페어리":
      typeColor = "TypeFairy";
      break;
    case "고스트":
      typeColor = "TypeGhost";
      break;
    case "드래곤":
      typeColor = "TypeDragon";
      break;
    case "에스퍼":
      typeColor = "TypePsychic";
      break;
    default:
    case "노말":
      break;
  }
  return typeColor;
};
