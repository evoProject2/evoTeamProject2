import { Box } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import {useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import IntroPage from "./components/IntroPage/IntroPage";
import UserRepositoriesPage from "./components/UserRepositoriesPage/UserRepositoriesPage";
import {setUsername} from './userSlice'
import {setInputValue} from './inputSlice'

function App() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch()

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
          <Route path="/" element={<IntroPage />} />
          <Route path="/:username" element={<UserRepositoriesPage />} />
        </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
