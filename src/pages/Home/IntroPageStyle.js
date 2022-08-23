export const introPageContainerStyle = {
  display: "flex",
  width: "fit-content",
  height: "90vh",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

export const introTitleStyle = {
  fontSize: "30px",
  marginBottom: "10px",
  color: "secondary.main",
};

export const inputAndBtnContainerStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
export const inputStyle = (showInput) => {
  return {
    color: "primary.main",
    padding: "4px 10px",
    borderRadius: "2px",
    width: showInput ? "300px" : "0px",
    visibility: showInput ? "visible" : "hidden",
    transition: "width 350ms ease-in-out",
  };
};
