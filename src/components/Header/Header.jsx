import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import logo from "./logo.png";
import useStyles from "./Style";
import useWebAnimations, {
  bounceInLeft,
  bounceInRight,
} from "@wellyshen/use-web-animations";

function Header() {
  const classes = useStyles();

  const { keyframes: main, timing: mainTime } = bounceInLeft;

  const { ref } = useWebAnimations({
    keyframes: main,
    timing: {
      ...mainTime,
      delay: "2000",
      easing: "ease",
    },
  });

  const { keyframes: mainText, timing: textTime } = bounceInRight;

  const { ref: mainHeadText } = useWebAnimations({
    keyframes: mainText,
    timing: {
      ...textTime,
      delay: "2000",
      easing: "ease",
    },
  });

  return (
    <div className={classes.container}>
      <AppBar
        position="static"
        className={classes.right}
        style={{ background: "#282c34" }}
      >
        <Toolbar variant="dense">
          <img
            src={logo}
            className={classes.logo}
            title="Covid-19"
            alt="logo"
            ref={ref}
          />
        </Toolbar>
      </AppBar>
      <AppBar
        position="static"
        className={classes.left}
        style={{ background: "#282c34" }}
      >
        <Toolbar variant="dense" className={classes.typo}>
          <Typography
            variant="h4"
            color="inherit"
            className={classes.heading}
            ref={mainHeadText}
          >
            COVID-19 TRACKING
          </Typography>
          <Typography color="inherit" className={classes.para}>
            The Coronavirus (COVID-19) was first reported in Wuhan, China in
            December 2019, the outbreak was later recognized as a pandemic by
            the World Health Organization (WHO) on March 2020.
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default Header;
