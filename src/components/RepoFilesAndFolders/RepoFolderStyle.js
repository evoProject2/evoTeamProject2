export const folderContainerStyle = {
  padding: "0.3rem 0",
  cursor: "pointer",
};

export const folderStyle = {
  display: "flex",
  alignItems: "center",
  padding: ".5rem 0rem .3rem 1.125rem",
  borderRadius: ".1rem",
  transition: "background 200ms ease-in-out, color 300ms ease-in-out",
  "&:hover": {
    backgroundColor: "primary.main",
    color: "#131313",
    transition: "background 200ms ease-in-out, color 300ms ease-in-out",
  },
};

export const folderNameStyle = {
  fontSize: "1.125rem",
  paddingLeft: ".75rem",
};
