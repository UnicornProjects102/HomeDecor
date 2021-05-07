import React from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import { withRouter } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Card from '@material-ui/core/Card';
import SimilarProduct from './SimilarProduct';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/ProductDetailStyles";

const ProductDetail = ({ products, match, addToCart, open, setOpen, classes }) => {

    const id = match.params.id;
    const product = products.find(p => p.id === id);
    const images = product.imgs.map((img) => (
        { original: img.url, thumbnail: img.tumb }
    ))
    const similar = products.filter(p =>
        (p.category === product.category) && (p.id !== product.id)
    );

    return (
        <div className={classes.root}>
            <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
                <Link color="inherit" href="/products">
                    Products
                </Link>
                <Link color="inherit" href={`/products/${product.category}`} className={classes.link}>
                    {product.category}
                </Link>
                <Typography color="textPrimary">{product.name}</Typography>
            </Breadcrumbs>
            <Box display="flex" justifyContent="center" className={classes.flexbox}>

                <Box display="flex" className={classes.imgContainer}>

                    <ImageGallery items={images} originalClass={classes.img} showPlayButton={false} />

                </Box>
                <Box display="flex" flexDirection="column" alignItems="flex-start" className={classes.details}>
                    <Card variant="outlined" className={classes.card}>
                        <Box display="flex" className={classes.infoBox}>
                            <Typography variant="h4" className={classes.productTitle}>{product.name}</Typography>
                            <Typography align="left" variant="body1">{product.desc}</Typography>
                            <Box align="left" display="flex" className={classes.addInfo}>
                                <Typography variant="subtitle1">Size: {product.size}</Typography>
                                <Typography variant="subtitle1">In stock: {product.inStock}</Typography>
                            </Box>

                        </Box>
                        <Box display="flex" className={classes.priceBox}>
                            <Typography variant="h6">${product.price}</Typography>
                            {product.inCart ? <Tooltip title="Open cart" className={classes.tooltip}><IconButton onClick={() => setOpen(!open)} className={classes.icon}><Typography variant="overline" className={classes.inCart}>In cart</Typography></IconButton></Tooltip> :
                                <Tooltip title="Add to cart">
                                    <IconButton className={classes.icon} onClick={() => addToCart(product)} size="small" color="primary">
                                        <FontAwesomeIcon icon={faShoppingCart} />
                                    </IconButton>
                                </Tooltip>
                            }
                        </Box>
                    </Card>
                </Box>

            </Box>
            <Box>
                <Typography className={classes.similarTitle} variant="h4">
                    Similar products
                </Typography>
            </Box>
            <Container className={classes.similarGrid} justify="center">
                <Grid container spacing={1}>
                    {similar.map((p) => (
                        <SimilarProduct key={p.id} name={p.name} price={p.price} tumb={p.tumb} id={p.id} />
                    ))}
                </Grid>
            </Container>
        </div>
    );
}

export default withStyles(styles)(withRouter(ProductDetail));