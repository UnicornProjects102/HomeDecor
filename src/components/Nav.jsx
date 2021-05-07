import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import { useTheme, fade, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import styles from "../styles/NavStyles";

const Nav = ({ cartItems, setCartItems, products, setProducts, open, setOpen, classes }) => {

    const theme = useTheme();

    const StyledBadge = withStyles((theme) => ({
        badge: {
            right: -3,
            top: 13,
            border: `1px solid ${fade(theme.palette.common.white, 0.8)}`,
            padding: '0 0',
            color: theme.palette.common.white,
            backgroundColor: fade(theme.palette.common.black, 0.8),
            fontWeight: 800
        },
    }))(Badge);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };


    return (
        <React.Fragment>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar className={classes.navToolbar}>
                    <Link to="/" >
                        <img alt="logo" src="https://unicorn-dev.pl/homedecor/img/logo.png" classname={classes.logo} />
                    </Link>
                    <IconButton aria-label="cart" onClick={handleDrawerOpen}
                        className={clsx(open && classes.hide)}>
                        <StyledBadge badgeContent={cartItems.length}>
                            <FontAwesomeIcon icon={faShoppingCart} />
                        </StyledBadge>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <FontAwesomeIcon icon={faChevronLeft} /> : <FontAwesomeIcon icon={faChevronRight} />}
                    </IconButton>
                </div>
                <Divider />
                <Cart setOpen={setOpen} cartItems={cartItems} setCartItems={setCartItems} products={products} setProducts={setProducts} />
            </Drawer>
        </React.Fragment>
    );
}

export default withStyles(styles)(Nav);




