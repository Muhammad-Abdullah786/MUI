import React, { useState } from "react";
import { KeyboardArrowDownRounded } from "@mui/icons-material";
import {
  Typography,
  Button,
  Menu,
  MenuItem,
  Stack,
  styled,
  Drawer,
  Box,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

export function MenuDesktop({ anchorEl, open, handleClick, handleClose }) {
  return (
    <>
      <Stack direction="row" spacing={3} display={"flex"}>
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

export function MenuMobile() {
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
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="right"
        open={isDawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box width={"250px"} textAlign={"center"} role={"presentation"}>
          <Typography>Hello</Typography>

          <Stack direction="column" spacing={3} display={"flex"}>
            <Button
              id="work-menu"
              // onClick={handleClick}
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
          {/* <Menu
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
          </Menu> */}
        </Box>
      </Drawer>
    </>
  );
}
