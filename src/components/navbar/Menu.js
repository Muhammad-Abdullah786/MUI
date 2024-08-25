import React from "react";
import { Typography, Button, Menu, MenuItem } from "@mui/material";

export function MenuDesktop({ anchorEl, open, handleClick, handleClose }) {
  return (
    <>
      <Stack direction="row" spacing={3}>
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
  return (
    <>
      <Typography variant="h3">H2llo</Typography>
    </>
  );
}
