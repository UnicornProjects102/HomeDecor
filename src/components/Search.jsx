import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { withRouter } from 'react-router-dom';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import styles from "../styles/SearchStyles";

const Search = ({ searchValue, setSearchValue, history, classes }) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/search/${searchValue}`);
    }

    return (
        <div className={classes.root}>
            <Toolbar className={classes.searchToolbar}>
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <form onSubmit={handleSubmit} className="form-inline d-flex justify-content-center">
                        <InputBase
                            placeholder="Search…" value={searchValue} onChange={setSearchValue} required
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </form>
                </div>
            </Toolbar>
        </div>
    );
}

export default withStyles(styles)(withRouter(Search));




