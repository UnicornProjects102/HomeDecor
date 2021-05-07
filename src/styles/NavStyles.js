
const styles = theme => ({
    appBar: {
        height: "4rem",
        paddingTop: "1rem",
        backgroundColor: "#fafafa",
        boxShadow: "0 0 0 0",
        color: "black"
    },
    navToolbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: "100%",
        flexShrink: 0,
        textAlign: "center",
        [theme.breakpoints.up('md')]: {
            width: "48%"
        },
        [theme.breakpoints.up('lg')]: {
            width: "35%"
        }
    },
    drawerPaper: {
        width: "100%",
        [theme.breakpoints.up('md')]: {
            width: "48%"
        },
        [theme.breakpoints.up('lg')]: {
            width: "35%"
        }
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-start',
    }
});

export default styles;