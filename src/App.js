import { Paper } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/Home/IntroPage";
import UserRepositories from "./pages/UserRepositories";

function App() {
  const appStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    backgroundColor: "#0d1117",
    color: "#FFFFFF",
    overflow: "auto",
    minHeight: "100vh",
  };

  return (
    <Paper sx={appStyle} className={"app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/evoTeamProject2/" element={<IntroPage />} />
          <Route path="/evoTeamProject2/:username" element={<UserRepositories />} />
        </Routes>
      </BrowserRouter>
    </Paper>
  );
}

export default App;
