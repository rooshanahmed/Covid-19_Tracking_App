import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import { useStyles } from './StyleFooter';
import cloud from './cloud.png';
import { FaFacebook } from 'react-icons/fa';
import { GoMarkGithub } from 'react-icons/go'

function Footer (){

    const classes = useStyles();

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
                            <IconButton href="https://www.facebook.com/rooshan.ahmed0" target="_blank">
                                <FaFacebook color='#4267B2' size='1.5em'/>
                            </IconButton>
                            <IconButton href="https://github.com/rooshanahmed" target="_blank">
                                <GoMarkGithub color='black' size='1.5em'/>
                            </IconButton>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default Footer