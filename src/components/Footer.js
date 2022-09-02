import { IconButton, Typography } from "@mui/material";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
  return (
    <div
      style={{
        backgroundColor:"white",
        textAlign: "center",
        padding: "0.5rem",
        marginTop: "1rem",
        borderRadius: "0.5rem 0.5rem 0 0",
      }}
    >
      <IconButton>
        <LinkedInIcon fontSize="medium" />
      </IconButton>
      <IconButton>
        <FacebookIcon fontSize="medium" />
      </IconButton>
      <IconButton>
        <TwitterIcon fontSize="medium" />
      </IconButton>
      <IconButton>
        <EmailIcon fontSize="medium" />
      </IconButton>

      <br />

      <Typography>Made with love in bharat</Typography>

    </div>
  );
}

export default Footer;
