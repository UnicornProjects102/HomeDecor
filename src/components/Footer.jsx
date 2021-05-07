import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withStyles } from '@material-ui/core/styles';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import styles from "../styles/FooterStyles";

const Footer = ({ classes }) => {

    return (
        <div className={classes.root}>
            <Grid fixed="true" container spacing={0} className={classes.container}>
                <Grid item xs={7} className={classes.info}>
                    <Link to="/"><Typography className={classes.link} variant="body2">Contact Us</Typography></Link>
                    <Link to="/"><Typography className={classes.link} variant="body2">Shipping</Typography></Link>
                    <Link to="/"><Typography className={classes.link} variant="body2">Privacy Policy</Typography></Link>

                </Grid>
                <Grid item xs={5} className={classes.icons}>
                    <a target="_blank" rel="noreferrer" href="https://facebook.com/">
                        <Avatar className={classes.icon}>
                            <FontAwesomeIcon icon={faFacebook} />
                        </Avatar>
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://instagram.com/">
                        <Avatar className={classes.icon}>
                            <FontAwesomeIcon icon={faInstagram} />
                        </Avatar>
                    </a>
                </Grid>
            </Grid>

        </div >
    );
}

export default withStyles(styles)(Footer);