import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import IconButton from '@material-ui/core/IconButton';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import styles from "../styles/CartItemStyles"

const CartItem = ({ name, price, tumb, inStock, increase, decrease, deleteItem, cartCount, classes }) => {

    return (
        <Grid container spacing={2}>

            <Grid item xs={3} md={3}>
                <Avatar variant="square" alt="tumb" src={tumb} className={classes.avatar} style={{ height: "100%" }} />
            </Grid>

            <Grid item xs={9} md={9} className={classes.infoGrid}>
                <Box display="flex" alignItems="center" className={classes.infoGridBox}>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" p={0} m={0} className={classes.infoGridInnerBox}>
                        <Box>
                            <Typography variant="h6">{name}</Typography>
                        </Box>
                        <Box>
                            <Typography variant="subtitle2">${(price * cartCount).toFixed(2)}</Typography>
                        </Box>
                        <Box>
                            <ButtonGroup variant="contained" size="small" color="default" aria-label="contained primary button group" className={classes.buttonGroup}>
                                <IconButton onClick={decrease} disabled={cartCount === 1 ? true : false}>-</IconButton>
                                <IconButton className={classes.cartCount} disabled>{cartCount}</IconButton>
                                <IconButton onClick={increase} disabled={cartCount >= inStock ? true : false}>+</IconButton>
                            </ButtonGroup>
                        </Box>

                    </Box>
                    <Box>
                        <IconButton onClick={deleteItem} aria-label="delete">
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </IconButton>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(CartItem);