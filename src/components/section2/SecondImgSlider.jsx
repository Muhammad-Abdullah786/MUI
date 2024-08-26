import React, { useState } from "react";
import {
  Stack,
  Typography,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function SecondImgSlider() {
  const [expanded, setExpanded] = useState(false);

  const handleAccordionChange = (event, isExpanded) => {
    setExpanded(isExpanded);
  };

  return (
    <Stack
      sx={{ width: { mobile: 90, tablet: 200, laptop: 300, desktop: 760 } }}
      spacing={1}
      direction={"row"}
    >
      <Stack
        sx={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <img
          src="../../src/assets/Big img/8.Ranier.png"
          alt="img"
          style={{ width: "100%", height: "auto" }}
        />

        <Accordion
          expanded={expanded}
          onChange={handleAccordionChange}
          sx={{
            position: "absolute",
            // bottom: 0,
            top: 0,
            // right: 0,
            // left: 0,
            width: "100%",
            height: expanded ? "100%" : "auto",
            backgroundColor: "primary.main",
            zIndex: 1,
            transition: "height 0.3s ease",
          }}
        >
          <AccordionSummary
            id="panel1-header"
            aria-controls="panel1-content"
            expandIcon={<ExpandMoreIcon />}
          >
            <Typography>First Section</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>This is the content of the first section</Typography>
          </AccordionDetails>
        </Accordion>
      </Stack>

      <Stack
        sx={{
          width: "1212px",
          height: "auto",
        }}
      >
        <img
          src="../../src/assets/Big img/8.Ranier.png"
          alt="img"
          style={{ width: "100%", height: "auto" }}
        />
      </Stack>
    </Stack>
  );
}

export default SecondImgSlider;
