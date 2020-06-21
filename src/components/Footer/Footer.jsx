import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { useStyles } from './StyleFooter';
import cloud from './cloud.png';




function Footer (){

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <AppBar position="static" className={classes.footer} color="secondary">
                <Toolbar variant="dense" className={classes.toolbar}>
                    <img src={cloud} className={classes.vector} alt="cloud logo"/>   
                    <div>
                        <Typography variant="h4" className={classes.typo}>
                            Rooshan Ahmed&copy;
                        </Typography>
                        <Button variant="contained" href="https://github.com/rooshanahmed/Covid-19_Tracking_App" target="_blank" className={classes.button}><b>GitHub Repository</b></Button>
                        <Button variant="contained" href="https://www.facebook.com/rooshan.ahmed0" target="_blank" className={classes.buttun}><b>Facebook Profile</b></Button>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Footer