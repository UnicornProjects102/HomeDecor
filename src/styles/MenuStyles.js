import { fade } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        marginLeft: "2rem",
        height: "60%",
        paddingTop: 0,
        [theme.breakpoints.down('md')]: {
            marginLeft: "0"
        }
    },
    linkWide: {
        height: "60%",
        borderBottom: "2px solid transparent",
        "&:hover": {
            textDecoration: "none",
            color: "black",
            borderBottom: "2px solid grey"
        }
    },
    linkSmall: {
        color: "black",
    },
    activeWide: {
        color: theme.palette.common.black,
        borderBottom: "2px solid black"
    },
    activeSmall: {
        textDecoration: "none",
        color: fade(theme.palette.common.black, 0.4),
    },
    accordionDetails: {
        position: "absolute",
        backgroundColor: "white",
        width: "94vw",
    },
    list: {
        width: '100%',
    },
    listItem: {
        textAlign: "center",
        textTransform: "uppercase"
    },
    accordion: {
        backgroundColor: "#fff8f6",
        boxShadow: "0 0"
    }
});

export default styles;