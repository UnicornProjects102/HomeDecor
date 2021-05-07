import { fade } from '@material-ui/core/styles';

const styles = (theme) => ({
    root: {
        width: "100%",
        left: 0,
        bottom: 0,
        height: "8rem",
        backgroundColor: "rgb(241, 178, 181)"
    },
    info: {
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        padding: "0.5rem 2rem",
        justifyContent: "center",
        height: "8rem",
        [theme.breakpoints.down('xs')]: {
            alignItems: "center",
        }
    },
    icons: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: "0rem 1.5rem",
    },
    link: {
        padding: "0.3rem 1rem",
        fontSize: "1rem",
        color: fade("#0000", 0.7),
        "&:hover": {
            color: "#fafafaea"
        }
    },
    container: {
        height: "8rem",
    },
    icon: {
        marginRight: "0.5rem",
        "&:hover": {
            backgroundColor: "#f1b2b531"
        }
    }

});

export default styles;