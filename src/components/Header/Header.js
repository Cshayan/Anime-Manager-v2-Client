import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Grid } from '@material-ui/core/';
import GoBack from '../utilityComponents/GoBack';
import AnimeSearchBar from '../AnimeSearchBar/AnimeSearchBar';
import AvatarPopup from '../AvatarPopUp/AvatarPopup';

const useStyles = makeStyles(() => ({
  headerContainer: {
    padding: '0.5rem',
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const {
    isBackButtonRequired,
    isSearchBarRequired,
    isAvatarPopUpRequired,
  } = props;
  return (
    <Grid container className={classes.headerContainer} alignItems="center">
      <Grid item xs={2}>
        {isBackButtonRequired && <GoBack toolTipTitle="Go Back to home" />}
      </Grid>
      <Grid item xs={8}>
        {isSearchBarRequired && <AnimeSearchBar />}
      </Grid>
      <Grid item xs={2} container>
        {isAvatarPopUpRequired && <AvatarPopup />}
      </Grid>
    </Grid>
  );
};

Header.propTypes = {
  isBackButtonRequired: PropTypes.bool,
  isSearchBarRequired: PropTypes.bool,
  isAvatarPopUpRequired: PropTypes.bool,
};

Header.defaultProps = {
  isBackButtonRequired: false,
  isSearchBarRequired: false,
  isAvatarPopUpRequired: false,
};

export default Header;
