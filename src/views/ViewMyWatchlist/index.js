import React from 'react';
import { makeStyles } from '@material-ui/core/';
import ViewMyWatchlistContainer from 'containers/ViewMyWatchlistContainer';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
    },
  },
  back: {
    background: theme.palette.background.default,
  },
}));

const ViewMyWatchlist = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.back}>
      <ViewMyWatchlistContainer {...props} />
    </div>
  );
};

export default ViewMyWatchlist;
