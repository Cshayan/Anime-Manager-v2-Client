import React from 'react';
import { Grid } from '@material-ui/core/';
import AnimeWatchListViewCard from 'components/AnimeCard/AnimeWatchListViewCard';
import PropTypes from 'prop-types';
import { useAnime, useAnimeDetailDialog } from 'custom-hooks/animeHook';

const AnimeWatchListView = (props) => {
  const { animeWatchlist } = props;
  const {
    handleDeleteFromWatchlistClick,
    isAnimeDeletingFromWatchlist,
  } = useAnime();
  const { handleStatusClick } = useAnimeDetailDialog();

  return (
    <Grid container spacing={2}>
      {animeWatchlist.map((anime) => (
        <Grid item xs={12} md={12} lg={12} key={anime._id}>
          <AnimeWatchListViewCard
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

export default AnimeWatchListView;
