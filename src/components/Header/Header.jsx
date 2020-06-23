import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import logo from './logo.png';
import useStyles from './Style';



function Header (){

    const classes = useStyles();

    return (
        <div className={classes.container}>
            <AppBar position="static" className={classes.right} style={{ background : '#282c34' }}>
                <Toolbar variant="dense">
                    <img src={logo} className={classes.logo} title="Covid-19" alt="logo" />
                </Toolbar>
            </AppBar>
            <AppBar position="static" className={classes.left} style={{ background : '#282c34' }}>
                <Toolbar variant="dense" className={classes.typo}>
                    <Typography variant="h4" color="inherit" className={classes.heading}>
                        COVID-19 TRACKING
                    </Typography>
                    <Typography color="inherit" className={classes.para}>
                        The Coronavirus (COVID-19) was first reported in Wuhan, China in December 2019,
                        the outbreak was later recognized as a pandemic by the World Health Organization (WHO)
                        on March 2020.
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    )
}
export default Header