import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { CardActionArea } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/ProductStyles";

const Product = ({ id, name, price, tumb, history, classes }) => {

    const handleClick = () => {
        history.push(`/products/${id}`)
    }

    return (
        <Grid item key={id} xs={12} sm={6} md={3}>
            <CardActionArea onClick={handleClick}>
                <Card className={classes.card}>
                    <CardMedia
                        className={classes.cardMedia}
                        image={tumb}
                        title={name}
                    />
                    <CardContent className={classes.cardContent}>
                        <Grid item xs={12}>
                            <Typography variant="subtitle2" component="subtitle2">
                                {name}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="overline" component="overline">
                                ${price}
                            </Typography>
                        </Grid>
                    </CardContent>
                </Card>
            </CardActionArea>
        </Grid>
    );
}

export default withStyles(styles)(withRouter(Product));