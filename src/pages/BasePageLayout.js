import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import SwitchMode from "../components/SwitchMode";

const BasePageLayout = ({ children }) => {
  return (
    <Paper
      sx={{
        width: "100%",
        overflow: "auto",
        minHeight: "100vh",
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        maxWidth="xl"
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "flex-end",
          }}
        >
          <SwitchMode />
        </Box>
        {children}
      </Container>
    </Paper>
  );
};

export default BasePageLayout;
