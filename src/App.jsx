import { ThemeProvider, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import Nav from "../src/components/navbar/Nav";
import { theme } from "../src/style";
import Topbar from "./components/topbar/Topbar";

export default function App() {
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
