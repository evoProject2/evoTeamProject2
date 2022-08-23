export const folderContainerStyle = {
  padding: "0.3rem 0",
  cursor: "pointer",
};

export const folderStyle = (theme) => ({
  display: "flex",
  alignItems: "center",
  padding: ".5rem 0rem .3rem 1.125rem",
  borderRadius: ".1rem",
  transition: "background 200ms ease-in-out, color 300ms ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.mode === "light" ? "#5B5B5B" : "#FFFFFF",
    color: theme.palette.mode === "light" ? "#fff" : "#1c244c",
    transition: "background 200ms ease-in-out, color 300ms ease-in-out",
  },
});

export const folderNameStyle = {
  fontSize: "1.125rem",
  paddingLeft: ".75rem",
};
