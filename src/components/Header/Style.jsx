import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles(theme =>({
    container: {
        width: '100%',
        display: 'flex',
        [theme.breakpoints.down("xs")]:{
            flexDirection: 'column'
        }
    },
    left: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',
        borderBottomRightRadius: '15px',
        [theme.breakpoints.down("xs")]: {
            width:'100%',
            borderBottomLeftRadius: '15px'
        }
    },
    right: {
        width: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        boxShadow: 'none',
        borderBottomLeftRadius: '15px',
        [theme.breakpoints.down("xs")]:{
            width: '100%',
            borderBottomLeftRadius: '0px'
        }
    },
    logo: {
        height: '300px',
        margin: '30px',
        [theme.breakpoints.down("sm")]: {
            height: '200px'
        },
        [theme.breakpoints.down("xs")]: {
            height: '150px'
        }
    },
    heading: {
        fontStyle: 'Lucida Sans',
        fontWeight: 'bold',
        fontSize: '3.2em',
        marginBottom: '10px',
        letterSpacing: '2px',
        textAlign: 'center',
        borderBottom: '1px solid azure',
        [theme.breakpoints.down("sm")]: {
            fontSize: '2em'
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '1.5em'
        },
    },
    para: {
        width: '80%',
        fontSize: '1em',
        fontFamily: 'sans-serif',
        lineHeight: '25px',
        [theme.breakpoints.down("sm")]: {
            fontSize: '0.6em',
            lineHeight: '15px',
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: '0.3em',
            lineHeight: '10px',
            width: '60%',
            textAlign: 'center'
        },    
    },
    typo: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down("xs")]:{
            margin: '20px'
        },
    },

}))
export default useStyles