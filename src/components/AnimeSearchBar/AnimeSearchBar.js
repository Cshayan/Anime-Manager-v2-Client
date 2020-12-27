import React from 'react';
import { makeStyles } from '@material-ui/core/';
import {
  useFocus,
  useGlobalSearchAnime,
} from 'custom-hooks/globalAnimeSearchHook';
import cls from 'classnames';
import './searchBarStyle.css';

const useStyles = makeStyles((theme) => ({
  searchBarContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  searchButton: {
    padding: '1rem',
    color: '#fff',
    background: theme.button.background.light,
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    boxShadow: `0 3px 45px rgba(0, 0, 0, 0.1)`,
    borderTopRightRadius: '5px',
    borderBottomRightRadius: '5px',
    '&:hover': {
      opacity: 0.9,
    },
    '&:disabled': {
      background: theme.button.background.light,
      cursor: 'no-drop',
      opacity: '0.5',
    },
  },
  blueText: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(16),
    background: theme.palette.background.default,
  },
  blueIcon: {
    color: theme.palette.primary.main,
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
  },
  select: {
    '&:before': {
      border: 'none',
    },
    '&:after': {
      border: 'none',
    },
  },
  '@media screen and (max-width: 600px)': {
    searchButton: {
      padding: '0.5rem',
      width: '70%',
      margin: 'auto',
      marginTop: '5px',
      borderRadius: 0,
    },
    searchBarContainer: {
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
    },
    blueText: {
      width: '100%',
    },
  },
}));

const AnimeSearchBar = () => {
  const classes = useStyles();
  const { onSearchBarBlur, onSearchBarFocus } = useFocus();
  const {
    animeName,
    onHandleAnimeNameChange,
    onHandleAnimeSearch,
    isAnimeLoading,
    isDarkModeEnabled,
  } = useGlobalSearchAnime();

  const handleDropDownChange = (e) => {
    if (Number(e.target.value) === 1) {
      onSearchBarBlur();
    } else {
      onSearchBarFocus();
    }
  };

  return (
    <form
      className={classes.searchBarContainer}
      onSubmit={(e) => onHandleAnimeSearch(e)}
    >
      <div className="box">
        <select
          onChange={(e) => handleDropDownChange(e)}
          className={cls({
            'lightmode-select': !isDarkModeEnabled,
            'darkmode-select': isDarkModeEnabled,
          })}
        >
          <option value="1">Search your watchlist</option>
          <option value="2">Search all animes</option>
        </select>
      </div>
      <input
        type="search"
        placeholder="Search for your favourite anime"
        className={cls({
          'searchBar-light': !isDarkModeEnabled,
          'searchBar-dark': isDarkModeEnabled,
        })}
        value={animeName}
        onChange={onHandleAnimeNameChange}
      />
      <button
        type="submit"
        className={classes.searchButton}
        disabled={isAnimeLoading}
      >
        {isAnimeLoading ? (
          <i
            className="fa fa-spinner fa-spin"
            style={{ color: '#fff', fontSize: '20px', overflow: 'hidden' }}
          ></i>
        ) : (
          'SEARCH'
        )}
      </button>
    </form>
  );
};

export default AnimeSearchBar;
