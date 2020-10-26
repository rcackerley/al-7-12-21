export const theme = {
  colors: {
    black: "#000000",
    white: "#ffffff",

    blueLightest: "#f1fafe",
    blueLight: "#4dc6ff",
    blue: "#3c9cd2",
    blueDark: "#297dae",
    blueDarkest: "#1e5c80",

    blueGreyLightest: "#f7f9fa",
    blueGreyLight: "#b1c4ce",
    blueGrey: "#658b9f",
    blueGreyDark: "#4f6d7d",
    blueGreyDarkest: "#3b525e",

    greenLightest: "#bce1bc",
    greenLight: "#8acc8a",
    green: "#5cb85c",
    greenDark: "#439843",
    greenDarkest: "#327132",

    greyLightest: "#e5e5e5",
    greyLight: "#cacccf",
    grey: "#7a7f88",
    greyDark: "#4f5359",
    greyDarkest: "#3a3a3a",

    indigoLightest: "#9b9fe9",
    indigoLight: "#4f56d8",
    indigo: "#253ea2",
    indigoDark: "#0d163a",
    indigoDarkest: "#040611",

    orangeLightest: "#ffe4bd",
    orangeLight: "#ffca7a",
    orange: "#ffa726",
    orangeDark: "#fb8c00",
    orangeDarkest: "#ef6c00",

    redLightest: "#f4afae",
    redLight: "#ec716f",
    red: "#e53935",
    redDark: "#c71d1a",
    redDarkest: "#951613",

    tealLightest: "#92f2ee",
    tealLight: "#40e7e2",
    teal: "#17bbb6",
    tealDark: "#12918d",
    tealDarkest: "#0d6d6a",

    // Vendor colors
    vendorTwitterLike: "#E0245E",
    vendorTwitterRetweet: "#17bf63",
    vendorTwitterBlue: "#1da1f2",
    vendorLinkedInBlue: "#0077b5",
    vendorSalesforceBlue: "#1589ee",

    // background colors
    bgBlueGrey: "#f2f2f2",
    bgGrey: "#F9FAFB",
  },
  breakpoints: {
    xs: "0",
    sm: "530px",
    md: "960px",
    lg: "1280px",
    xl: "1400px",
  },
};

export const getColor = (color) => theme.colors[color];
export const getBreakpoint = (breakpoint) => theme.breakpoints[breakpoint];
