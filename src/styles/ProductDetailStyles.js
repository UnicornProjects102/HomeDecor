const styles = theme => ({
    root: {
        marginTop: "9.5rem",
        padding: "1rem",
        [theme.breakpoints.down('xs')]: {
            marginBottom: "2rem"
        }
    },
    imgContainer: {
        width: "30%",
        [theme.breakpoints.down('md')]: {
            width: "50%",
        },
        [theme.breakpoints.down('xs')]: {
            width: "100%",
        }
    },
    img: {
        maxWidth: "100%",
        height: "auto"
    },
    productTitle: {
        [theme.breakpoints.down('xs')]: {
            paddingBottom: "1rem"
        }
    },
    details: {
        width: "50%",
        padding: "0rem 2rem",
        [theme.breakpoints.down('xs')]: {
            width: "100%",
            display: "flex",
            alignItems: "center",
        }
    },
    card: {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "baseline",
        justifyContent: "space-between",
        padding: "2rem",
        [theme.breakpoints.down('xs')]: {

        }
    },
    infoBox: {
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-around",
        height: "50%",
        [theme.breakpoints.down('md')]: {
            height: "90%"
        }

    },
    addInfo: {
        paddingTop: "1rem",
        flexDirection: "column",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "row",
            width: "100%",
            justifyContent: "space-between"
        }
    },
    priceBox: {
        alignSelf: "flex-end",
        justifyContent: "center",
        alignItems: "center"
    },
    icon: {
        marginLeft: "0.5rem",
        padding: "0.7rem"
    },
    inCart: {
        lineHeight: "0.8rem"
    },
    flexbox: {
        padding: "0.5rem",
        margin: "0 3rem",
        [theme.breakpoints.down('xs')]: {
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
        }
    },
    breadcrumbs: {
        padding: "1rem 0.5rem"
    },
    link: {
        textTransform: "capitalize"
    },
    similarTitle: {
        paddingTop: "3rem"
    },
    similarGrid: {
        padding: "2rem 0"
    }
});

export default styles;