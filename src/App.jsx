import { styled, ThemeProvider, Typography } from "@mui/material";
import { green, purple, red, blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import Nav from "../src/components/navbar/Nav";
import { theme } from "../src/style";

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
          <Nav />
          {/* <Typography variant="h1">Hello</Typography> */}
        </Responsive>
      </ThemeProvider>
    </>
  );
}
