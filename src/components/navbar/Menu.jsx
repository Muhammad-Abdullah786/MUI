import React, { useState } from "react";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import {
  Button,
  Menu,
  MenuItem,
  Stack,
  Drawer,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function MenuDesktop({ anchorEl, open, handleClick, handleClose }) {
  return (
    <>
      <Stack direction="row-reverse" spacing={3} display={"flex"}>
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
        <Button>HEllo</Button>
        <Button>HEllo</Button>
        <Button>HEllo</Button>
        <Button>HEllo</Button>
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
      </Menu>
    </>
  );
}

export function MenuMobile({ anchorEl, open, handleClick, handleClose }) {
  const [isDawerOpen, setIsDrawerOpen] = useState(false);
  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
        color="inherit"
      >
        <MenuIcon color="primary" />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width={"250px"} textAlign={"center"} role={"presentation"}>
          <IconButton edge="start" color="inherit" disableRipple>
            <Stack
              sx={{
                width: { xs: 50, sm: 90, md: 120, lg: 180 },
                //   height: { xs: 100, sm: 200, md: 100, lg: 600 },
              }}
            >
              <img src="../../src/assets/Logo.jpg" alt="LOGo" />
            </Stack>
          </IconButton>
          <Stack direction="column-reverse" spacing={3} display={"flex"}>
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
            <Button>HEllo</Button>
            <Button>HEllo</Button>
            <Button>HEllo</Button>
            <Button>HEllo</Button>
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
          </Menu>
        </Box>
      </Drawer>
    </>
  );
}
