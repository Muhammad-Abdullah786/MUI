import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: "#FFFFFF;",
    },
    secondary: {
      main: "#444444",
    },
    default: {
      main: "cyan",
    },
  },
  typography: {
    fontFamily: "Gilroy",
    fontSize: 16,
  },
});
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </StrictMode>
);
