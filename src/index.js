import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import { store } from './store'
import { ThemeProvider } from "@emotion/react";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { theme } from "./utilities/theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(

  <ThemeProvider theme={theme}>
    <CssBaseline />
      <Provider store={store}>
          <App />
      </Provider>
  </ThemeProvider>
);
reportWebVitals();