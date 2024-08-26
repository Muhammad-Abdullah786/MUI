import { Typography, Stack } from "@mui/material";
import React from "react";

export default function ImgSlider({ imgList, currentIndex }) {
  return (
    <>
      <Stack direction={"row"} width={"420px"} spacing={4} height={"684.61px"}>
        {imgList.map((item) => (
          <img
            src={`${imgList[currentIndex].img}`}
            key={item.img}
            alt="slider-image"
            loading="lazy"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ))}
        {/* <img src="../../src/assets/card img/Group 11.jpg" alt="error" /> */}
      </Stack>
    </>
  );
}
