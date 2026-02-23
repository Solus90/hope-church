export const colors = {
  hopeBlue: "#356F8E",
  harborWhite: "#F2F5F6",
  deepHarbor: "#173A4A",
  skywash: "#6FA3BD",
  sandstone: "#CBB89D",
  lanternGold: "#C9A24D",
  sproutGreen: "#6E8F7A",

  gray700: "#5B6A72",
  gray200: "#DCE3E7",

  success: "#5E8C61",
  warning: "#D4A85F",
  error: "#B5544F",
};

export const semantic = {
  background: {
    primary: colors.harborWhite,
    secondary: "#FFFFFF",
    muted: colors.gray200,
    dark: colors.deepHarbor,
  },

  text: {
    primary: colors.deepHarbor,
    secondary: colors.gray700,
    inverted: colors.harborWhite,
    link: colors.hopeBlue,
  },

  brand: {
    primary: colors.hopeBlue,
    accent: colors.lanternGold,
    subtle: colors.skywash,
  },

  border: {
    default: colors.gray200,
    strong: colors.gray700,
  },

  state: {
    success: colors.success,
    warning: colors.warning,
    error: colors.error,
  },
};
