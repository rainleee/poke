const deepFreeze = (obj: object) => {
  Object.values(obj).forEach((v) => {
    if (v && typeof v === "object") {
      deepFreeze(v);
    }
  });

  return Object.freeze(obj);
};

const STBlueColors = {
  "STBlue-900": "#33315F",
  "STBlue-800": "#3F3D7D",
  "STBlue-700": "#534FAB",
  "STBlue-600": "#574CD0",
  "STBlue-500": "#5C55F7",
  "STBlue-400": "#9494FF",
  "STBlue-300": "#C1C1FF",
  "STBlue-200": "#DCDCFF",
  "STBlue-100": "#EAEAFF",
  "STBlue-50": "#F5F5FF",
  "STBlue-25": "#FAFAFE",
};

const WarmGrayColors = {
  "WarmGray-900": "#333333",
  "WarmGray-800": "#444444",
  "WarmGray-700": "#555555",
  "WarmGray-600": "#666666",
  "WarmGray-500": "#888888",
  "WarmGray-400": "#ADADAD",
  "WarmGray-300": "#CCCCCC",
  "WarmGray-200": "#DDDDDD",
  "WarmGray-100": "#EEEEEE",
  "WarmGray-50": "#F7F7F7",
};

const BlueGrayColors = {
  "BlueGray-900": "#1B2334",
  "BlueGray-800": "#2E3647",
  "BlueGray-700": "#404A5F",
  "BlueGray-600": "#596378",
  "BlueGray-500": "#6F798E",
  "BlueGray-400": "#A2ACBD",
  "BlueGray-300": "#C7CDD7",
  "BlueGray-200": "#DCE0E9",
  "BlueGray-100": "#EBEEF4",
  "BlueGray-50": "#F4F6F9",
};

const PokeTypeColors = {
  TypeGrass: "#42BF24", //풀
  TypeWater: "#6890F0", //물
  TypePoison: "#994DCF", //독
  TypeGround: "#E0C068", //땅
  TypeDark: "#705848", //악
  TypeFire: "#F08030", //불꽃
  TypeFlying: "#A890F0", //비행
  TypeBug: "#A8B820", //벌레
  TypeElectric: "#F8D030", //전기
  TypeFighting: "#C03028", //격투
  TypeRock: "#B8A038", //바위
  TypeSteel: "#B8B8D0", //강철
  TypeIce: "#98D8D8", //얼음
  TypeNormal: "#A8A878", //노말
  TypeFairy: "#EE99AC", //페어리
  TypeGhost: "#705898", //고스트
  TypeDragon: "#7038F8", //드래곤
  TypePsychic: "#F85888", //에스퍼
};

const PokeColors = {
  ...PokeTypeColors,
  "Red-DA343C": "#DA343C",
};

deepFreeze(STBlueColors);
deepFreeze(WarmGrayColors);
deepFreeze(BlueGrayColors);
deepFreeze(PokeColors);

export { STBlueColors, WarmGrayColors, BlueGrayColors, PokeColors };
