import React, { useEffect } from 'react';
import Product from './Product';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/ProductContainerStyles";

const ProductContainer = ({ products, category, collection, match, addToCart, classes }) => {

    const searchValue = match ? match.params.searchValue : null;

    const categoryProducts = products.filter(p => p.category === category);
    const collectionProducts = products.filter(p => p.collection === collection)
    const searchedProducts = products.filter(p => p.name.toLowerCase().includes(searchValue));
    const display = category ? categoryProducts : collection ? collectionProducts : searchValue ? searchedProducts : products;

    useEffect(() => {
        console.log(searchValue, searchedProducts)
    })

    return (
        <Container className={classes.cardGrid} justify="center">
            <Grid container spacing={1}>
                {display.map((p) => (
                    <Product key={p.id} name={p.name} price={p.price} tumb={p.tumb} imgs={p.imgs} id={p.id} inCart={p.inCart} onClick={() => addToCart(p)} />
                ))}
            </Grid>
        </Container>
    );
}

export default withStyles(styles)(ProductContainer);