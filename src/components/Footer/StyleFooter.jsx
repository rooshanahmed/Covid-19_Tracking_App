import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
  footer: {
    borderTopRightRadius: "15px",
    borderTopLeftRadius: "15px",
  },
  typo: {
    fontFamily: "Comfortaa",
    color: "white",
    flexGrow: "1",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.2em",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "0.8em",
    },
  },
}));