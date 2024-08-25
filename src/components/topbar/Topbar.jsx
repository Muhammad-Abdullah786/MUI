import { Button, Stack, Typography } from "@mui/material";
import React from "react";

function Topbar() {
  const buttons = ["Request a Quote", "Visit Our Showdown", "What's New"];
  return (
    <>
      <Stack
        sx={{
          width: "100%",
          //   height: "56px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          //   py: 2,
          backgroundColor: "#444444",
        }}
        direction={"row"}
        // spacing={3}
      >
        {buttons.map((label, index) => (
          <Button
            key={index}
            sx={{
              color: "white",
              fontWeight: "bold",
              textTransform: "uppercase",
              //   px: 10,
              //   py: 4,
              //   fontSize: 16,
              letterSpacing: 0.5,
              width: "640px",
              height: "50px",
              //   borderRadius: 10,
              "&:hover": {
                backgroundColor: "#666666",
              },
              "&:focus": {
                backgroundColor: "#666666",
              },
              "&:active": {
                backgroundColor: "#444444",
              },
              "&:disabled": {
                backgroundColor: "#666666",
              },
            }}
          >
            {label}
          </Button>
        ))}
        {/* <Typography variant="h6">Hello</Typography> */}
      </Stack>
    </>
  );
}

export default Topbar;
