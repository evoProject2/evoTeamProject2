import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {useState} from "react";
import './App.css';
import IntroPage from "./components/IntroPage/IntroPage";
import UserRepositoriesPage from "./components/UserRepositoriesPage/UserRepositoriesPage";

function App() {
    const [username, setUsername] = useState('')

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
    <Box sx={appStyle}>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<IntroPage setUsername={setUsername}/>} />
            <Route path="/:username" element={<UserRepositoriesPage username={username}/>}  />
          <Route path="/" element={<IntroPage />} />
          <Route path="/:username" element={<UserRepositoriesPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
