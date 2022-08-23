export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#000000",
          },
          secondary: {
            main: "#7e5abd",
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: "#fff",
          },
          secondary: {
            main: "#673ab7",
          },
          background: {
            paper: "#0d1118",
            default: "#0d1118",
          },
        }),
  },
});
