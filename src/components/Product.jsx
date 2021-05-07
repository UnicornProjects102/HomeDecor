import React from 'react';
import { withRouter } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/ProductStyles";

const Product = ({ id, name, price, tumb, imgs, onClick, inCart, history, classes }) => {

    const handleClick = () => {
        history.push(`/products/${id}`)
    }

    return (
        <Grid item key={id} xs={12} sm={6} md={3}>
            <Card className={classes.card}>
                <CardActionArea onClick={handleClick}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={tumb}
                        title={name}
                    />
                    <CardContent align="left" className={classes.cardContent}>
                        <Typography variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography variant="h6" component="h3">
                            ${price}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardContent align="right" className={classes.cardButton}>

                    {inCart ? <Typography variant="overline">In cart</Typography> :
                        <Tooltip title="Add to cart">
                            <IconButton className={classes.icon} onClick={onClick} size="small" color="primary">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </IconButton>
                        </Tooltip>
                    }

                </CardContent>
            </Card>
        </Grid>
    );
}

export default withStyles(styles)(withRouter(Product));