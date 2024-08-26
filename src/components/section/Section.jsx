import { Box, Stack, Typography, Button } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useState } from "react";
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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? imgList.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === imgList.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
      {/* <Typography>Hello</Typography> */}
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
        <ImgSlider imgList={imgList} currentIndex={currentIndex} />
        <Button
          variant="contained"
          onClick={handlePrev}
          sx={{
            position: "relative",
            top: "50%",
            left: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          <ArrowBackIosIcon />
          Prev
        </Button>

        {/* Next Button */}
        <Button
          variant="contained"
          onClick={handleNext}
          sx={{
            position: "relative",
            top: "50%",
            right: 0,
            transform: "translateY(-50%)",
            zIndex: 1,
          }}
        >
          Next
          <ArrowForwardIosIcon />
        </Button>
      </Box>
    </>
  );
}
