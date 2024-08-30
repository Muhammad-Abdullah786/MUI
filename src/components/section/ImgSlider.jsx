import { Button } from "@mui/material";
import React, { useRef } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default function ImgSlider({ imgList }) {
  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

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
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {imgList.map((item) => (
            <div key={item.img}>
              <img
                src={`${item.img}`}
                alt="slider-image"
                key={item.img}
                loading="lazy"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  // margin: "0px 10px",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>

      <Button
        onClick={previous}
        variant="contained"
        sx={{
          position: "absolute",
          left: 0,
          top: {
            mobile: "180%",
            tablet: "190%",
            laptop: "200%",
            desktop: "180%",
          },
        }}
      >
        <ArrowBackIosIcon />
        Prev
      </Button>
      <Button
        variant="contained"
        onClick={next}
        sx={{
          position: "absolute",
          right: 0,
          top: {
            mobile: "180%",
            tablet: "190%",
            laptop: "200%",
            desktop: "180%",
          },
        }}
      >
        Next
        <ArrowForwardIosIcon />
      </Button>
    </>
  );
}
