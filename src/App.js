import { Paper } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import IntroPage from "./pages/Home/IntroPage";
import UserRepositories from "./pages/UserRepositories";

function App() {
  const appStyle = {
    width: "100%",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0d1117",
    color: "#FFFFFF",
  };

  return (
    <Paper sx={appStyle}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/:username" element={<UserRepositories />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
