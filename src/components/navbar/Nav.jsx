import { Container, AppBar, Toolbar, IconButton, Stack } from "@mui/material";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import React, { useState } from "react";

const Nav = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Container>
        <AppBar
          position="static"
          sx={{
            backgroundColor: "brown",
            display: "flex",
          }}
        >
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <IconButton edge="start" color="inherit" disableRipple>
              <Stack
                sx={{
                  width: { xs: 90, sm: 120, md: 140, lg: 200 },
                  //   height: { xs: 100, sm: 200, md: 100, lg: 600 },
                }}
              >
                <img src="../../src/assets/download (8).png" alt="LOGo" />
              </Stack>
            </IconButton>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Nav;
