import {
  Container,
  Typography,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Stack,
  Menu,
  MenuItem,
} from "@mui/material";
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
            <Stack direction="row" spacing={3}>
              <Button>Hello</Button>
              <Button>Hello</Button>
              <Button
                id="work-menu"
                onClick={handleClick}
                aria-controls={open ? "menu-work" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                endIcon={<KeyboardArrowDownRounded />}
              >
                Work
              </Button>
              <Button>Hello</Button>
            </Stack>
            <Menu
              id="menu-work"
              anchorEl={anchorEl}
              open={open}
              MenuListProps={{
                "aira-labelledby": "work-menu",
              }}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>what we work on</MenuItem>
              <MenuItem onClick={handleClose}>our customer</MenuItem>
              <MenuItem onClick={handleClose}>our customer</MenuItem>
              <MenuItem onClick={handleClose}>our customer</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </Container>
    </>
  );
};

export default Nav;
