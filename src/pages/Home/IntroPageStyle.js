export const introPageContainerStyle = {
  display: "flex",
  height: "100vh",
  width: "100%",
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
  overflow: "hidden",
};
export const inputStyle = (showInput) => {
  return {
    color: "primary.main",
    padding: "4px 10px",
    borderRadius: "2px",
    width: showInput ? "200px" : "0px",
    visibility: showInput ? "visible" : "hidden",
    transition: "width 300ms ease-in-out",
  };
};

export const introBtnStyle = {
  backgroundColor: "secondary.main",
  fontSize: "16px",
  visibility: "visible",
};
