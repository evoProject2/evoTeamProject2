import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material/styles";

export default function RepoCard() {
  const theme = useTheme();
  return (
    <Paper
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundColor: theme.palette.background,
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
        borderRadius: "0px",
        overflowX: "hidden",
      }}
      elevation={2}
    >
      <Card
        sx={{
          minWidth: 275,
          height: "30em",
          backgroundColor: "black",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            minWidth: 150,
            backgroundColor: "pink",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          aa
        </Box>
      </Card>
    </Paper>
  );
}
