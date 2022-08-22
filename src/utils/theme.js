export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === "light"
      ? {
          // palette values for light mode
          primary: {
            main: "#1c244c",
          },
          secondary: {
            main: "#673ab7",
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
