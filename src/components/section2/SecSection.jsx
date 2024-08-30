import { Typography, Box, Stack, useMediaQuery } from "@mui/material";
import React from "react";
import { SecondImgSlider } from "../../index";
import { theme } from "../../style";
import SecImgSliderMobile from "./SecImgSliderMobile";

const imgSlider2 = [
  {
    img1: "../../src/assets/Big img/8.Ranier.png",
    img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
    accordianSummary: "First Section",
    accodianDetail: "the is the detail of accordian",
  },
  {
    img1: "../../src/assets/Big img/8.Ranier.png",
    img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
    accordianSummary: "First Section",
    accodianDetail: "the is the detail of accordian",
  },
  {
    img1: "../../src/assets/Big img/8.Ranier.png",
    img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
    accordianSummary: "First Section",
    accodianDetail: "the is the detail of accordian",
  },
  {
    img1: "../../src/assets/Big img/8.Ranier.png",
    img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
    accordianSummary: "First Section",
    accodianDetail: "the is the detail of accordian",
  },
  {
    img1: "../../src/assets/Big img/8.Ranier.png",
    img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
    accordianSummary: "First Section",
    accodianDetail: "the is the detail of accordian",
  },
  {
    img1: "../../src/assets/Big img/8.Ranier.png",
    img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
    accordianSummary: "First Section",
    accodianDetail: "the is the detail of accordian",
  },
  {
    img1: "../../src/assets/Big img/8.Ranier.png",
    img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
    accordianSummary: "First Section",
    accodianDetail: "the is the detail of accordian",
  },
];

function SecSection() {
  const matches = useMediaQuery(theme.breakpoints.down("tablet"));

  return (
    <>
      <Box
        sx={{
          margin: "130px 0 ",
        }}
      >
        <Stack>
          <Typography
            variant="h4"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
              letterSpacing: "4px",
              color: "primary.main",
              fontWeight: "bold",
              letterSpacing: "4px",
              [theme.breakpoints.up("mobile")]: {
                fontSize: "1rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "2rem",
              },
              [theme.breakpoints.up("laptop")]: {
                fontSize: "2.5rem",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "3rem",
              },
            }}
          >
            SHOP YOUR COUNTERTOP BY MATERIAL AND FUNCTION
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "primary.main",
              margin: "1rem 0",
              [theme.breakpoints.up("mobile")]: {
                fontSize: "0.95rem",
              },
              [theme.breakpoints.up("tablet")]: {
                fontSize: "2rem",
              },
              [theme.breakpoints.up("laptop")]: {
                fontSize: "2.5rem",
              },
              [theme.breakpoints.up("desktop")]: {
                fontSize: "3rem",
              },
            }}
          >
            Find the perfect stone and countertop for your home.{" "}
          </Typography>
        </Stack>
        {!matches && <SecondImgSlider imgSlider2={imgSlider2} />}
        {matches && <SecImgSliderMobile imgSlider2={imgSlider2} />}
      </Box>
    </>
  );
}

export default SecSection;
