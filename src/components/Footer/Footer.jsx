import React from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@material-ui/core";
import { useStyles } from "./StyleFooter";
import { FaFacebook } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";

function Footer() {
  const classes = useStyles();

  return (
    <AppBar
      position="static"
      className={classes.footer}
      style={{ background: "#282c34" }}
    >
      <Toolbar>
        <Typography
          variant="h5"
          className={classes.typo}
          style={{ fontFamily: "Times New Roman, Times, serif" , fontSize: "1.5em" }}
        >
          <strong>
            Rooshan Ahmed&copy;
            <br />
            Stay Home Stay Safe
          </strong>
        </Typography>
        <IconButton
          href="https://www.facebook.com/rooshan.ahmed0"
          target="_blank"
        >
          <FaFacebook color="#4267B2" size="1.5em" />
        </IconButton>
        <IconButton href="https://github.com/rooshanahmed" target="_blank">
          <GoMarkGithub color="black" size="1.5em" />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
export default Footer;