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
        <div>
          <Typography variant="h5" className={classes.typo}>
            Project By Rooshan Ahmed&copy;
          </Typography>
          <Typography variant="subtitle2" style={{ fontSize: '20px', color: 'white' }}>Stay Home Stay Safe</Typography>
        </div>
        <div className={classes.contain}>
          <IconButton
            href="https://www.facebook.com/rooshan.ahmed0"
            target="_blank"
          >
            <FaFacebook color="#4267B2" size="1.5em" />
          </IconButton>
          <IconButton href="https://github.com/rooshanahmed" target="_blank">
            <GoMarkGithub color="black" size="1.5em" />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
}
export default Footer;
