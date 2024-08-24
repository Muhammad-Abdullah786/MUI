// import { Container, Typography } from "@mui/material";
// import Nav from "../src/components/navbar/Nav";
// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [w, setW] = useState(window.innerWidth);

//   useEffect(() => {
//     const handleWidth = () => {
//       setW(window.innerWidth);
//     };

//     window.addEventListener("resize", handleWidth);
//     return () => {
//       window.addEventListener("resize", handleWidth);
//     };
//   }, []);
//   return (
//     <Container>
//       {/* <Nav></Nav> */}
//       <Typography variant="h1">Hello</Typography>
//       <Typography variant="h1">{w}</Typography>
//     </Container>
//   );
// };

// export default App;

import { styled, Typography } from "@mui/material";
import { green, purple, red, blue } from "@mui/material/colors";
import React, { useEffect, useState } from "react";

export default function App() {
  const [w, setW] = useState(window.innerWidth);

  const Responsive = styled("div")(({ theme }) => ({
    [theme.breakpoints.up("sm")]: {
      color: purple[500],
    },
    [theme.breakpoints.up("md")]: {
      color: green[600],
    },
    [theme.breakpoints.up("lg")]: {
      color: blue[600],
    },
    [theme.breakpoints.up("xl")]: {
      color: red[600],
    },
  }));

  // const Responsive = styled("div")(({ theme }) => ({
  //   [theme.breakpoints.up("mobile")]: {
  //     color: green[500],
  //   },
  //   [theme.breakpoints.up("tablet")]: {
  //     color: purple[500],
  //   },
  //   [theme.breakpoints.up("desktop")]: {
  //     color: red[500],
  //   },
  // }));

  useEffect(() => {
    const handleWidth = () => {
      setW(window.innerWidth);
    };

    window.addEventListener("resize", handleWidth);
    return () => {
      window.addEventListener("resize", handleWidth);
    };
  }, []);

  return (
    <>
      {/* <Nav /> */}
      <Responsive>
        <Typography variant="h1">Hello</Typography>
        <Typography variant="h1">{w}</Typography>
      </Responsive>
    </>
  );
}
