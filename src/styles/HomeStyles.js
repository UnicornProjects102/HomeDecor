const styles = theme => ({
    root: {
        flexDirection: "column"
    },
    banner: {
        maxWidth: "100vw",
        marginTop: "10rem",
        marginBottom: "2rem",
        justifyContent: "center",
        justifyItems: "center",
        alignContent: "center",
    },
    cardCont: {
        justifyContent: "center",
        height: "50vh",
        padding: "0rem 0"
    },
    card: {
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "0 0rem",
        [theme.breakpoints.down('xs')]: {
            padding: "0 0"
        }
    },
    cardDark: {
        width: "100%",
        height: "100%",
        display: "flex",
        padding: "0 0rem",
        backgroundColor: "#dfdfdff3",
        [theme.breakpoints.down('xs')]: {
            padding: "0 0"
        }
    },
    content: {
        width: "60%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        [theme.breakpoints.down('xs')]: {
            width: "50%",
        }
    },
    cover: {
        width: "40%",
        margin: "1.5rem",
        [theme.breakpoints.down('xs')]: {
            width: "50%"
        }
    }
});

export default styles;