// import React, { useState, useRef } from "react";
// import {
//   Stack,
//   Typography,
//   Accordion,
//   AccordionDetails,
//   AccordionSummary,
//   Button,
//   Box,
// } from "@mui/material";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import Slider from "react-slick";
// import "../section2/slider.css";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

// const imgSlider2 = [
//   {
//     img1: "../../src/assets/Big img/8.Ranier.png",
//     img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
//     accordianSummary: "First Section",
//     accodianDetail: "the is the detail of accordian",
//   },
//   {
//     img1: "../../src/assets/Big img/8.Ranier.png",
//     img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
//     accordianSummary: "First Section",
//     accodianDetail: "the is the detail of accordian",
//   },
//   {
//     img1: "../../src/assets/Big img/8.Ranier.png",
//     img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
//     accordianSummary: "First Section",
//     accodianDetail: "the is the detail of accordian",
//   },
//   {
//     img1: "../../src/assets/Big img/8.Ranier.png",
//     img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
//     accordianSummary: "First Section",
//     accodianDetail: "the is the detail of accordian",
//   },
//   {
//     img1: "../../src/assets/Big img/8.Ranier.png",
//     img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
//     accordianSummary: "First Section",
//     accodianDetail: "the is the detail of accordian",
//   },
//   {
//     img1: "../../src/assets/Big img/8.Ranier.png",
//     img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
//     accordianSummary: "First Section",
//     accodianDetail: "the is the detail of accordian",
//   },
//   {
//     img1: "../../src/assets/Big img/8.Ranier.png",
//     img2: "../../src/assets/Big img/627575339a4b4a7aabc06ae8_modern-bathroom-marble-countertop-1600w.png",
//     accordianSummary: "First Section",
//     accodianDetail: "the is the detail of accordian",
//   },
// ];

// function SecondImgSlider() {
//   var settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     initialSlide: 2,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: true,
//         },
//       },
//       {
//         breakpoint: 600,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 2,
//           initialSlide: 2,
//         },
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//         },
//       },
//     ],
//   };

//   let sliderRef = useRef(null);

//   const next = () => {
//     sliderRef.slickNext();
//   };
//   const previous = () => {
//     sliderRef.slickPrev();
//   };
//   const [expanded, setExpanded] = useState(false);

//   const handleAccordionChange = (event, isExpanded) => {
//     setExpanded(isExpanded);
//   };

//   const imgHeight = "400px";

//   return (
//     <Box position={"relative"} aria-label="box-div">
//       <div className="slider-container">
//         <Slider
//           className="custom-slider"
//           ref={(slider) => {
//             sliderRef = slider;
//           }}
//           {...settings}
//         >
//           {imgSlider2.map((item, index) => (
//             <Stack
//               sx={{ width: "100%" }}
//               spacing={1}
//               direction={"row"}
//               key={index}
//             >
//               <Stack
//                 sx={{
//                   position: "relative",
//                   overflow: "hidden",
//                   width: { mobile: 90, tablet: 200, laptop: 300, desktop: 360 },
//                   height: imgHeight,
//                 }}
//               >
//                 <img
//                   src={item.img1}
//                   alt="img1"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ensure image covers the fixed height
//                 />

//                 <Accordion
//                   aria-label="accordion"
//                   expanded={expanded}
//                   onChange={handleAccordionChange}
//                   sx={{
//                     position: "absolute",
//                     top: 0,
//                     width: "100%",
//                     height: expanded ? "100%" : "auto",
//                     backgroundColor: "primary.main",
//                     zIndex: 1,
//                     transition: "height 0.3s ease",
//                     // display: "flex",
//                   }}
//                 >
//                   <AccordionSummary
//                     aria-label="accordion-summ"
//                     id={`panel1-header-${index}`}
//                     aria-controls="panel1-content"
//                     expandIcon={<ExpandMoreIcon />}
//                   >
//                     <Typography>{item.accordianSummary}</Typography>
//                   </AccordionSummary>
//                   <AccordionDetails aria-label="accordion-detail">
//                     <Typography>{item.accodianDetail}</Typography>
//                   </AccordionDetails>
//                 </Accordion>
//               </Stack>

//               <Stack
//                 sx={{
//                   width: "1212px",
//                   height: imgHeight,
//                 }}
//               >
//                 <img
//                   aria-label="right-image"
//                   src={item.img2}
//                   alt="img"
//                   style={{ width: "100%", height: "100%", objectFit: "cover" }}
//                 />
//               </Stack>
//             </Stack>
//           ))}
//         </Slider>
//         <Button
//           onClick={previous}
//           variant="contained"
//           sx={{
//             position: "absolute",
//             left: 0,
//             top: "45%",
//             zIndex: 1,
//           }}
//         >
//           <ArrowBackIosIcon />
//           Prev
//         </Button>
//         <Button
//           variant="contained"
//           onClick={next}
//           sx={{
//             position: "absolute",
//             right: 0,
//             zIndex: 1,

//             top: "45%",
//           }}
//         >
//           Next
//           <ArrowForwardIosIcon />
//         </Button>
//       </div>
//     </Box>
//   );
// }

// export default SecondImgSlider;

import React, { useState, useRef } from "react";
import {
  Stack,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Box,
} from "@mui/material";
import Carousel from "react-material-ui-carousel";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

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

function SecondImgSlider() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  const imgHeight = "400px";

  return (
    <Box position={"relative"} aria-label="box-div">
      <Carousel
      sx={{
        width:{ mobile: , }
      }}
        animation="slide"
        duration={500}
        navButtonsAlwaysVisible={true}
        NextIcon={
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: 0,
              zIndex: 1,

              top: "45%",
            }}
          >
            Next
            <ArrowForwardIosIcon />
          </Button>
        }
        PrevIcon={
          <Button
            // onClick={previous}
            variant="contained"
            sx={{
              position: "absolute",
              left: 0,
              top: "45%",
              zIndex: 1,
            }}
          >
            <ArrowBackIosIcon />
            Prev
          </Button>
        }
      >
        {imgSlider2.map((item, index) => (
          <Stack
            sx={{ width: "100%" }}
            spacing={1}
            direction={"row"}
            key={index}
          >
            <Stack
              sx={{
                position: "relative",
                overflow: "hidden",
                width: { mobile: 90, tablet: 200, laptop: 300, desktop: 360 },
                height: imgHeight,
              }}
            >
              <img
                src={item.img1}
                alt="img1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }} // Ensure image covers the fixed height
              />

              <Accordion
                aria-label="accordion"
                expanded={expanded}
                onChange={handleAccordionChange}
                sx={{
                  position: "absolute",
                  top: 0,
                  width: "100%",
                  height: expanded ? "100%" : "auto",
                  backgroundColor: "primary.main",
                  zIndex: 1,
                  transition: "height 0.3s ease",
                  // display: "flex",
                }}
              >
                <AccordionSummary
                  aria-label="accordion-summ"
                  id={`panel1-header-${index}`}
                  aria-controls="panel1-content"
                  expandIcon={<ExpandMoreIcon />}
                >
                  <Typography>{item.accordianSummary}</Typography>
                </AccordionSummary>
                <AccordionDetails aria-label="accordion-detail">
                  <Typography>{item.accodianDetail}</Typography>
                </AccordionDetails>
              </Accordion>
            </Stack>

            <Stack
              sx={{
                width: "1212px",
                height: imgHeight,
              }}
            >
              <img
                aria-label="right-image"
                src={item.img2}
                alt="img"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </Stack>
          </Stack>
        ))}
      </Carousel>
      {/* <Button
        onClick={previous}
        variant="contained"
        sx={{
          position: "absolute",
          left: 0,
          top: "45%",
          zIndex: 1,
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
          zIndex: 1,

          top: "45%",
        }}
      >
        Next
        <ArrowForwardIosIcon />
      </Button> */}
    </Box>
  );
}

export default SecondImgSlider;
