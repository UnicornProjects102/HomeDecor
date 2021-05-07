const styles = theme => ({
    avatar: {
        height: "90%",
        minWidth: "7rem",
        maxWidth: "100%"
    },
    buttonGroup: {
        boxShadow: "0 0",
        width: "4rem",
        [theme.breakpoints.down('xs')]: {
            width: "100%"
        }
    },
    infoGridBox: {
        justifyContent: "space-between",
        height: "100%",
        padding: "0rem 1rem",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            flexDirection: "column",
            alignItems: "center"
        }
    },
    infoGridInnerBox: {
        height: "100%",
        [theme.breakpoints.down('xs')]: {
            minHeight: "8rem",
            alignItems: "center",
            justifyContent: "space-between",
        }
    }
});

export default styles;