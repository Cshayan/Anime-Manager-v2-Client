import React, { useState } from 'react';
import { makeStyles, MenuItem, Select } from '@material-ui/core/';
import {
  useFocus,
  useGlobalSearchAnime,
} from 'custom-hooks/globalAnimeSearchHook';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
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
    '&:hover': {
      opacity: 0.9,
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
  } = useGlobalSearchAnime();
  const { isMobile } = useResizeScreen();
  const [dropDownValue, setDropDownValue] = useState(1);

  const handleDropDownChange = (e) => {
    setDropDownValue(e.target.value);

    if (e.target.value === 1) {
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
      <Select
        fullWidth={!!isMobile}
        variant="filled"
        value={dropDownValue}
        onChange={handleDropDownChange}
        classes={{
          root: classes.blueText,
          icon: classes.blueIcon,
          outlined: classes.select,
        }}
        className={classes.select}
      >
        <MenuItem value={1} className={classes.blueText}>
          Search your watchlist.
        </MenuItem>
        <MenuItem value={2} className={classes.blueText}>
          Search all animes.
        </MenuItem>
      </Select>
      <input
        type="text"
        placeholder="&#61442; Search for your favourite anime"
        className="searchBar"
        value={animeName}
        onChange={onHandleAnimeNameChange}
      />
      <button type="submit" className={classes.searchButton}>
        Search
      </button>
    </form>
  );
};

export default AnimeSearchBar;
