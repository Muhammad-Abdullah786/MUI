import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { ImgSlider } from "../../index";

const imgList = [
  {
    img: "../../src/assets/card img/Group 11.jpg",
  },
  {
    img: "../..//src/assets/card img/Group 13.jpg",
  },
  {
    img: "../..//src/assets/card img/How-to-do-Marble-Wall-Cladding.jpg",
  },
  {
    img: "../..//src/assets/card img/KP04BL1091.jpg",
  },
  {
    img: "../..//src/assets/card img/pexels-max-rahubovskiy-6301185.jpg",
  },
  {
    img: "../..//src/assets/card img/spacejoy-XpbtQfr9Skg-unsplash.jpg",
  },
  {
    img: "../..//src/assets/card img/pexels-vecislavas-popa-3741317.jpg",
  },
];

export default function Section() {
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
            }}
          >
            START YOUR JOURNEY
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "primary.main", margin: "1rem 0" }}
          >
            What Type of project do you have?
          </Typography>
        </Stack>
        {/* this is where the img slider will come */}
        <ImgSlider imgList={imgList} />
      </Box>
    </>
  );
}
