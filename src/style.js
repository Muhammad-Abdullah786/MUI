import { createTheme } from "@mui/material";

export const theme = createTheme({
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1200,
    },
  },
  // now gonna change the theme color
  palette: {
    primary: {
      main: "#525252",
    },
    secondary: {
      main: "#F5F5F5",
    },
  },
  typography: {
    fontFamily: "Gilroy",
    fontSize: 16,
    color: 'black'
  },
  // and add more styles here
});


