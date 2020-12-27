import React from 'react';
import PropTypes from 'prop-types';
import cls from 'classnames';
import { makeStyles, Typography } from '@material-ui/core';
import './select-search-style.css';

const useStyles = makeStyles((theme) => ({
  searchSelectCont: {
    width: '70%',
    height: '100%',
    margin: 'auto',
  },
  infoText: {
    color: theme.palette.text.primary,
  },
}));

const WatchlistSelectSearch = (props) => {
  const { watchlist, isDarkModeEnabled } = props;
  const classes = useStyles();
  return (
    <div className={classes.searchSelectCont}>
      <select
        className={cls({
          classic: true,
          'lightmode-select': !isDarkModeEnabled,
          'darkmode-select': isDarkModeEnabled,
        })}
      >
        <option disabled selected value="001">
          Statistics of your total watchlist
        </option>
        {watchlist?.map((item) => (
          <option value={item?.animeData?.mal_id} key={item?.animeData?.mal_id}>
            {item?.animeData?.title}
          </option>
        ))}
      </select>
      <Typography className={classes.infoText}>
        Select any anime from the dropdown to view its individual statistics.
      </Typography>
    </div>
  );
};

WatchlistSelectSearch.propTypes = {
  watchlist: PropTypes.array,
  isDarkModeEnabled: PropTypes.bool.isRequired,
};

WatchlistSelectSearch.defaultProps = {
  watchlist: [],
};

export default WatchlistSelectSearch;
