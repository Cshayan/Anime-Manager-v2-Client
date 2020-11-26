import React from 'react';
import { makeStyles } from '@material-ui/core/';
import SpecificAnimeDetailsContainer from 'containers/SpecificAnimeDetailsContainer/SpecificAnimeDetailsContainer';

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
  detailsBack: {
    background: theme.palette.background.default,
    width: '100vw',
    height: '100vh',
  },
}));

const AnimeDetailsView = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.detailsBack}>
      <SpecificAnimeDetailsContainer {...props} />
    </div>
  );
};

export default AnimeDetailsView;
