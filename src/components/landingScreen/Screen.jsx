import { Box, Typography, Button, Container } from "@mui/material";
import React from "react";

export default function Screen() {
  return (
    <>
      {/* <Typography variant="h2">Hello</Typography> */}
      <Container
        sx={{
          height: "100vh",
          backgroundImage: `url('../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w@2x.png')`,
          //   backgroundColor: "rgba(0, 0, 0, 0.5)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",

          padding: "2rem",
        }}
      >
        <Box
          sx={{
            alignitems: "flex-end",
            justifyContent: "flex-start",
            maxWidth: "1832.05px",
            height: "862.35px",
            padding: "2rem",
            borderRadius: "8px",
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h4" sx={{ color: "white", fontWeight: "bold" }}>
            ENJOY EVERYDAY LUXURY
          </Typography>
          <Typography variant="body1" sx={{ color: "white", margin: "1rem 0" }}>
            It's never been easier to design and achieve your ideal outcome.
          </Typography>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontWeight: "bold",
            }}
          >
            REQUEST A QUOTE
          </Button>
        </Box>
      </Container>
    </>
  );
}
