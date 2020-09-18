import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
} from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import { useStyles } from "./StyleCard";
import inf from "./inf.gif";
import recovered0 from "./recovered0.gif";
import deaths0 from "./deaths0.gif";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useStyles();

  if (!confirmed) {
    return <CircularProgress />;
  }

  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          className={cx(classes.card, classes.infected)}
          xs={13}
          md={3.5}
        >
          <CardContent className={classes.cardContent}>
            <img src={inf} alt="infected" width="140px" height="140px" />
            <Typography
              variant="h5"
              color="textPrimary"
              gutterBottom
              className={classes.heading}
            >
              Infected
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={confirmed.value}
                duration={6}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" className={classes.bottomText}>
              Active Cases
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(classes.card, classes.recovered)}
          xs={13}
          md={3.5}
        >
          <CardContent className={classes.cardContent}>
            <img
              src={recovered0}
              alt="recovered"
              width="140px"
              height="140px"
            />
            <Typography
              variant="h5"
              color="textPrimary"
              gutterBottom
              className={classes.heading}
            >
              Recovered
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={recovered.value}
                duration={6}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" className={classes.bottomText}>
              Total Recoveries
            </Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          className={cx(classes.card, classes.deaths)}
          xs={13}
          md={3.5}
        >
          <CardContent className={classes.cardContent}>
            <img src={deaths0} alt="deaths" width="140px" height="140px" />
            <Typography
              variant="h5"
              color="textPrimary"
              gutterBottom
              className={classes.heading}
            >
              Death
            </Typography>
            <Typography variant="h5">
              <CountUp
                start={0}
                end={deaths.value}
                duration={6}
                separator=","
              />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" className={classes.bottomText}>
              Total Deaths
            </Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
