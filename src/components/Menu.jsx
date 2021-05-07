import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import styles from "../styles/MenuStyles"

const StyledTabs = withStyles({
    indicator: {
        display: 'none',
    },
})((props) => <Tabs {...props} />);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        color: 'black',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(17),
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
    },
}))((props) => <Tab disableRipple {...props} />);

const Menu = ({ categories, classes }) => {

    const [expanded, setExpanded] = useState(false);
    const [value, setValue] = React.useState(0);
    const [width, setWidth] = React.useState(window.innerWidth);

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleExpand = () => {
        setExpanded(!expanded);
    };

    const updateWidth = () => {
        setWidth(window.innerWidth);
    };

    React.useEffect(() => {
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });

    return (
        <React.Fragment>
            {width > 1200 ?
                <div className={classes.root}>
                    <StyledTabs
                        value={value}
                        onChange={handleChange}
                        centered
                    >
                        {categories.map(c =>
                            <NavLink activeClassName={classes.activeWide} to={`/products/${c}`} className={classes.linkWide} key={c}>
                                <StyledTab label={c} />
                            </NavLink>
                        )}
                    </StyledTabs>
                </div> :
                <Accordion expanded={expanded} onChange={handleExpand} className={classes.accordion}>
                    <AccordionSummary
                        expandIcon={<FontAwesomeIcon icon={faBars} />}
                    />
                    <AccordionDetails className={classes.accordionDetails}>
                        <div className={classes.list}>
                            <List >
                                {categories.map(c =>
                                    <NavLink activeClassName={classes.activeSmall} to={`/products/${c}`} className={classes.linkSmall} key={c}>
                                        <ListItem button key={c} className={classes.listItem}>
                                            <ListItemText primary={c} />
                                        </ListItem>
                                    </NavLink>

                                )}
                            </List>
                        </div>
                    </AccordionDetails>
                </Accordion >
            }
        </React.Fragment>
    );
}

export default withStyles(styles)(Menu);