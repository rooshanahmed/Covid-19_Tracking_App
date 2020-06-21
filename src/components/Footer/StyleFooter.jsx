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
        marginLeft: '30px',
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
        borderBottom: '1px solid azure',
        [theme.breakpoints.down("sm")]: {
            fontSize: '1.5em'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '1em'
        },    
    },
    button: {
        marginTop: '10px',
        padding: '10px',
        color: 'white',
        backgroundColor: 'black',
        [theme.breakpoints.down("sm")]:{
            fontSize: '10px',
            padding: '3px 8px'
        },
    },
}));