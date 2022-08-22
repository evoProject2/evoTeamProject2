import { useState, useMemo, createContext } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./pages/Home/IntroPage";
import UserRepositories from "./pages/UserRepositories/UserRepositories";

import useMediaQuery from "@mui/material/useMediaQuery";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { getDesignTokens } from "./utils/theme";
import CssBaseline from "@mui/material/CssBaseline";
import BasePageLayout from "./pages/BasePageLayout";

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

const savedMode = localStorage.getItem("mode");

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const [mode, setMode] = useState(
    savedMode ? savedMode : prefersDarkMode ? "dark" : "light"
  );
  console.log(savedMode);
  const colorMode = useMemo(
    () => ({
      // The dark mode switch would invoke this method
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  // Update the theme only if the mode changes
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BasePageLayout>
          <BrowserRouter>
            <Routes>
              <Route path="/evoTeamProject2/" element={<IntroPage />} />
              <Route
                path="/evoTeamProject2/:username"
                element={<UserRepositories />}
              />
            </Routes>
          </BrowserRouter>
        </BasePageLayout>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
