import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core/';
import AnimewatchlistCard from '../AnimeCard/AnimeWatchlistCard';
import { useAnime, useAnimeDetailDialog } from '../../custom-hooks/animeHook';

const AnimeWatchlist = (props) => {
  const { animeWatchlist } = props;
  const {
    handleDeleteFromWatchlistClick,
    isAnimeDeletingFromWatchlist,
  } = useAnime();
  const { handleStatusClick } = useAnimeDetailDialog();

  return (
    <Grid container spacing={2}>
      {animeWatchlist.map((anime) => (
        <Grid item xs={12} md={4} lg={4} key={anime._id}>
          <AnimewatchlistCard
            animeId={anime._id}
            status={anime.animeStatus}
            {...anime}
            onDeleteClick={handleDeleteFromWatchlistClick}
            onStatusClick={handleStatusClick}
            isAnimeDeletingFromWatchlist={isAnimeDeletingFromWatchlist}
          />
        </Grid>
      ))}
    </Grid>
  );
};

AnimeWatchlist.propTypes = {
  animeWatchlist: PropTypes.array,
};

AnimeWatchlist.defaultProps = {
  animeWatchlist: [],
};

export default AnimeWatchlist;
