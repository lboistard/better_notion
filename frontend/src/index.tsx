import React from "react"
import ReactDOM from "react-dom/client"
import { ThemeProvider } from "@mui/material";

import App from "./App.tsx"
import "./index.css"
import { createTheme } from "./theme/index.ts";

const theme = createTheme();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
)
