import React, { useState, useEffect } from 'react';
import CartItem from "./CartItem";
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import styles from "../styles/CartStyles";

const Cart = ({ cartItems, setCartItems, products, setProducts, setOpen, classes }) => {

    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        let prices = []
        cartItems.map(item =>
            prices.push(item.price * item.cartCount)
        )
        let total = prices.reduce((a, b) => a + b, 0).toFixed(2)
        setCartTotal(total)
    }, [cartItems]);

    const increaseCount = (id) => {
        let newCartItems = [];
        cartItems.map(item => {
            if (item.id === id) {
                item.cartCount++
            }
            newCartItems.push(item)
            return item;
        })
        setCartItems(newCartItems)
    }

    const decreaseCount = (id) => {
        let newCartItems = [];
        cartItems.map(item => {
            if (item.id === id) {
                item.cartCount--;
            }
            newCartItems.push(item)
            return item;
        })
        setCartItems(newCartItems)
    }

    const deleteItem = (id) => {
        let newCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(newCartItems);
        products.map(p => {
            if (p.id === id) {
                p.inCart = false;
                p.cartCount = 0;
            } return p;
        })
        setProducts(products)
    }

    const deleteAll = () => {
        setCartItems([])
        products.forEach(p => {
            p.inCart = false
            p.cartCount = 0
        })
        setProducts(products)
    }

    return (
        <Grid container spacing={4} className={classes.container}>

            { cartItems.length < 1 ?
                <React.Fragment>
                    <Grid item xs={12}>
                        <Typography className={classes.emptyCartTitle} variant="h5">Your cart is empty</Typography>
                    </Grid>
                    <Grid item xs={12} className={classes.imgContainer}>
                        <img className={classes.emptyCartIcon} src="https://unicorn-dev.pl/homedecor/img/empty-cart.png" alt="empty cart"></img>
                        <div className={classes.overlay}></div>
                    </Grid>
                    <Grid item xs={12}>
                        <Link to="/products"><Button onClick={() => setOpen(false)} variant="contained" color="primary">Start shopping</Button></Link>
                    </Grid>
                </React.Fragment> :
                <React.Fragment>
                    <Grid item xs={12} className={classes.cartItems}>
                        {cartItems.map((item) => (
                            <CartItem key={item.id} name={item.name} price={item.price} tumb={item.tumb} id={item.id} inStock={item.inStock} increase={() => increaseCount(item.id)} decrease={() => decreaseCount(item.id)} deleteItem={() => deleteItem(item.id)} cartCount={item.cartCount} />
                        ))}
                    </Grid>
                    <Grid item xs={12}>
                        <Divider />
                        <Typography variant="h5">Total: ${cartTotal}</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={deleteAll} variant="contained" color="secondary">
                            Clear cart
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" color="primary">
                            Check out
                        </Button>
                    </Grid>
                </React.Fragment>
            }
        </Grid>
    );
}

export default withStyles(styles)(Cart);