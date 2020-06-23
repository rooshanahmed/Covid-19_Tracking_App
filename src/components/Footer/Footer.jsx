import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { useStyles } from './StyleFooter';
import cloud from './cloud.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer (){

    const classes = useStyles()

    return (
        <div className={classes.container}>
            <AppBar position="static" className={classes.footer} style={{ background : '#282c34' }}>
                <Toolbar variant="dense" className={classes.toolbar}>
                    <img src={cloud} className={classes.vector} alt="cloud logo"/>   
                    <div>
                        <Typography variant="h4" className={classes.typo}>
                            Rooshan Ahmed&copy;
                        </Typography>
                        <div className={classes.contain}>
                            <a href="https://github.com/rooshanahmed" className={classes.github} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} size="3x"/>
                            </a>
                            <a href="https://www.facebook.com/rooshan.ahmed0" className={classes.facebook} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faFacebook} size="3x"/>
                            </a>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Footer