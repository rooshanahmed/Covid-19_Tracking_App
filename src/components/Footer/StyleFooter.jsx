import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    container: {
        width: '100%',
    },
    footer: {
        borderTopRightRadius: '15px',
        borderTopLeftRadius: '15px',
    },
    toolbar: {
        display: 'flex',
    },
    vector: {
        height: '200px',
        marginLeft: '10px',
        [theme.breakpoints.down("sm")]: {
            height: '150px'
        },
        [theme.breakpoints.down("xs")]: {
            height: '100px'
        },    
    },
    typo: {
        fontFamily: 'Poppins',
        color: 'black',
        borderBottom: '1px solid black',
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '1em'
        },    
    },
    contain: {
        display: 'inline-block',
        marginTop: '5px',
        marginLeft: '800px',
    },
    github: {
        color: 'black',
    },
    facebook: {
        color: 'blue',
        padding: '5px',
    },
}));