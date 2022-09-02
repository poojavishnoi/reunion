import {
  Toolbar,
  IconButton,
  Button,
  Typography,
  Divider,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React from "react";

function Header() {
  return (
    <>
      <Toolbar>

        <Toolbar>
          <IconButton style={{ color:"purple"}}>
            <StorefrontIcon fontSize="large" />
          </IconButton>
          <Typography variant="h6">Estatery</Typography>
        </Toolbar>

        <Toolbar style={{ flexGrow: 1 }}>
          <Button variant="text" color="inherit">
            Rent
          </Button>

          <Button variant="text" color="inherit">
            Buy
          </Button>

          <Button variant="text" color="inherit">
            Sell
          </Button>

          <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            Manage Property
          </Button>

          <Button color="inherit" endIcon={<KeyboardArrowDownIcon />}>
            Resources
          </Button>
        </Toolbar>

        <Toolbar>
          <Button variant="outlined" style={{ color: "#271033" }}>
            Login
          </Button>
        </Toolbar>

        <Button
          variant="contained"
          color="inherit"
          style={{ backgroundColor: "#271033", color: "white" }}
        >
          SignUp
        </Button>

      </Toolbar>

      <Divider />
    </>
  );
}

export default Header;
