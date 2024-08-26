import { Container, styled, ThemeProvider, Typography } from "@mui/material";
import { green, purple, red, blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";
import { theme } from "../src/style";
import { Topbar, Nav, Screen, Section, Footer, SecSection } from "../src/index";

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
          <Container>
            <Nav />
            <Screen />
            <Section />
            <SecSection />
            {/* <Typography variant="h1">Hello</Typography> */}
          </Container>
          <Footer />
        </Responsive>
      </ThemeProvider>
    </>
  );
}
