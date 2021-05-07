import { fade } from '@material-ui/core/styles';
const styles = theme => ({
    container: {
        marginLeft: "1.6rem",
        width: "90%",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            marginLeft: 0
        }
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    cartItems: {
        marginTop: "2rem",
    },
    emptyCartIcon: {
        width: "40%"
    },
    emptyCartTitle: {
        paddingTop: "1rem"
    },
    imgContainer: {
        position: "relative",
        marginBottom: "2rem"
    },
    overlay: {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: fade("#FFFFFF", 0.5)
    }
});

export default styles;