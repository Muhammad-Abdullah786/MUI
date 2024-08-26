import { Typography, Box, Stack } from "@mui/material";
import React from "react";
import { SecondImgSlider } from "../../index";

function SecSection() {
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
            SHOP YOUR COUNTERTOP BY MATERIAL AND FUNCTION
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: "primary.main", margin: "1rem 0" }}
          >
            Find the perfect stone and countertop for your home.{" "}
          </Typography>
        </Stack>
        <SecondImgSlider />
      </Box>
    </>
  );
}

export default SecSection;
