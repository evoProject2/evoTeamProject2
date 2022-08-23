export const fileContainerStyle = (theme) => ({
  width: "100%",
  paddingLeft: "2.6rem",
  margin: ".3rem 0",
  borderRadius: ".1rem",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#5B5B5B" : "#FFFFFF",
    color: theme.palette.mode === "light" ? "#fff" : "#1c244c",
    transition: "background 200ms ease-in-out, color 300ms ease-in-out",
  },
});

export const fileNameContainerStyle = {
  display: "flex",
  alignItems: "center",
};

export const fileNameStyle = {
  width: "100%",
  padding: "0.2rem 0 0 .5rem",
  margin: ".3rem 0",
  fontSize: "0.9rem",
};
