import React from 'react';
import { makeStyles } from '@material-ui/core/';
import SpecificAnimeDetailsContainer from 'containers/SpecificAnimeDetailsContainer/SpecificAnimeDetailsContainer';

const useStyles = makeStyles((theme) => ({
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
