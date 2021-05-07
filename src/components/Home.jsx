import React from 'react';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css";
import { Typography } from "@material-ui/core"
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import styles from "../styles/HomeStyles";

const Home = ({ history, classes }) => {

    const showDetail = (idx) => {
        let image = images[idx]
        history.push(`/products/${image.productId}`)
    }

    const showCollection = (collection) => {
        history.push(`/products/${collection}`)
    }

    const images = (window.innerWidth >= 600) ? [
        { original: "https://unicorn-dev.pl/homedecor/img/banner_1.svg", thumbnail: null, originalAlt: "Unicorn Mug with Mashmellows", productId: "011-product-name" },
        { original: "https://unicorn-dev.pl/homedecor/img/banner_2.svg", thumbnail: null, originalAlt: "Woman holding unicorn mug", productId: "013-product-name" }] : [
        { original: "https://unicorn-dev.pl/homedecor/img/banner_1_mobile.svg", thumbnail: null, originalAlt: "Unicorn Mug with Mashmellows", productId: "011-product-name" },
        { original: "https://unicorn-dev.pl/homedecor/img/banner_2_mobile.svg", thumbnail: null, originalAlt: "Woman holding unicorn mug", productId: "013-product-name" }];

    return (
        <Box display="flex" className={classes.root}>
            <Box display="flex" className={classes.banner}>

                <ImageGallery items={images} showFullscreenButton={false} showThumbnails={false} showBullets={true} showNav={false} onPlay={(idx) => showDetail(idx)} />
            </Box>
            <Box display="flex" className={classes.cardCont}>
                <CardActionArea onClick={() => showCollection("pink")}>
                    <Box className={classes.cardDark}>

                        <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4">
                                Pink Collection
                    </Typography>
                            <Typography variant="button" color="textSecondary">
                                The cutest pink items.
                    </Typography>
                        </CardContent>
                        <CardMedia
                            className={classes.cover}
                            image="https://unicorn-dev.pl/homedecor/img/plushie_4.2.jpg"
                            title="Pink Collection"
                        />
                    </Box>
                </CardActionArea>
            </Box>
            <Box display="flex" className={classes.cardCont}>
                <CardActionArea onClick={() => showCollection("winter")}>
                    <Box className={classes.card}>
                        <CardMedia
                            className={classes.cover}
                            image="https://unicorn-dev.pl/homedecor/img/deco_3.1.jpg"
                            title="Winter Collection"
                        />
                        <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4">
                                Winter Collection
                    </Typography>
                            <Typography variant="button" color="textSecondary">
                                Winter collection with winter motives.
                    </Typography>
                        </CardContent>

                    </Box>
                </CardActionArea>
            </Box>
            <Box display="flex" className={classes.cardCont}>
                <CardActionArea onClick={() => showCollection("birthday")}>
                    <Box className={classes.cardDark}>

                        <CardContent className={classes.content}>
                            <Typography component="h4" variant="h4">
                                Birthday Collection
                    </Typography>
                            <Typography variant="button" color="textSecondary">
                                Items for birtday decoration.
                    </Typography>
                        </CardContent>
                        <CardMedia
                            className={classes.cover}
                            image="https://unicorn-dev.pl/homedecor/img/deco_5.1.jpg"
                            title="Birthday Collection"
                        />
                    </Box>
                </CardActionArea>
            </Box>
        </Box>);
}

export default withStyles(styles)(Home);