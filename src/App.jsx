import { styled, ThemeProvider, Typography } from "@mui/material";
import { green, purple, red, blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { theme } from "../src/style";
import { Topbar, Nav } from "../src/index";

export default function App() {
  const Responsive = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("mobile")]: {
      color: green[500],
    },
    [theme.breakpoints.up("tablet")]: {
      color: purple[500],
    },
    [theme.breakpoints.up("laptop")]: {
      color: blue[500],
    },
    [theme.breakpoints.up("desktop")]: {
      color: red[500],
    },
  }));

  return (
    <>
      <ThemeProvider theme={theme}>
        <Responsive>
          <Topbar />
          <Nav />
          {/* <Typography variant="h1">Hello</Typography> */}
        </Responsive>
      </ThemeProvider>
    </>
  );
}
