import { Button } from "@mui/material";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ImgSlider({ imgList }) {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="slider-container">
        <Slider {...settings}>
          {imgList.map((item) => (
            <div
              key={item.img}
              style={{
                padding: "0 10px", // This adds horizontal padding to each image
              }}
            >
              <img
                src={`${item.img}`}
                alt="slider-image"
                key={item.img}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  //   padding: "0px 10px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
      <Button
        variant="contained"
        sx={{
          position: "absolute",
          left: 0,
          top: "200%",
        }}
      >
        Next
        <ArrowForwardIosIcon />
      </Button>

      <Button
        variant="contained"
        sx={{
          position: "absolute",
          right: 0,
          top: "200%",
        }}
      >
        <ArrowBackIosIcon />
        Prev
      </Button>
    </>
  );
}
