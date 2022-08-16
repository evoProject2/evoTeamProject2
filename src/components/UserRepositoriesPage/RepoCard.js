import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card
        sx={{
          height: "300px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box sx={{ backgroundColor: "pink" }}>aa</Box>
      </Card>
    </Box>
  );
}
