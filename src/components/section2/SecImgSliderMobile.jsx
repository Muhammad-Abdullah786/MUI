import React, { useState } from "react";
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

function SecImgSliderMobile({ imgSlider2 }) {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  const imgHeight = "400px";

  return (
    <Box position={"relative"} aria-label="box-div">
      <Carousel
        sx={
          {
            // width:{ mobile: , }
          }
        }
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
            direction={"column"}
            key={index}
          >
            <Stack
              sx={{
                position: "relative",
                overflow: "hidden",
                height: imgHeight,
              }}
            >
              <img
                src={item.img1}
                alt="img1"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
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
    </Box>
  );
}

export default SecImgSliderMobile;
