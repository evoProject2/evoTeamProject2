import { Box, Typography } from "@mui/material";
import React from "react";

export const IntroPageAni = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0",
        backgroundColor: "#131313",
        zIndex: "999",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textTransform: "uppercase",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          fontSize: "3rem",
          marginBottom: "10px",
          color: "secondary.main",
        }}
      >
        Welcome to find my Repo
      </Typography>
    </Box>
  );
};
