import React from "react";
import { Typography, Button, Menu, MenuItem } from "@mui/material";

export function MenuDesktop() {
  const buttonLabel = ["hello", "bye", "hello", "work", "hello"];
  return (
    <>
      <Stack direction="row" spacing={3}>
        {buttonLabel.map((label, index) => {
          <Button
            key={index}

            id={label === 'work' || label === 'bye' ? `${label.toLowerCase}` : undefined}
            onClick={handleClick}
            aria-controls={open ? "menu-work" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            endIcon={<KeyboardArrowDownRounded />}
          >
            {label}
          </Button>;
        })}
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

export default Menu;
