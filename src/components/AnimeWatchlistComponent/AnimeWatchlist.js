import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core/';
import AnimeWatchVideoDialog from 'components/AnimeDetailDialog/AnimeWatchVideoDialog';
import {
  useAnime,
  useAnimeDetailDialog,
  useAnimeAddVideoUrl,
} from 'custom-hooks/animeHook';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
import AnimewatchlistCard from '../AnimeCard/AnimeWatchlistCard';

const AnimeWatchlist = (props) => {
  const { animeWatchlist } = props;
  const {
    handleDeleteFromWatchlistClick,
    isAnimeDeletingFromWatchlist,
  } = useAnime();
  const { handleStatusClick } = useAnimeDetailDialog();
  const {
    isWatchVideoDialogOpen,
    handleWatchVideoClick,
    handleWatchVideoDialogClose,
    videoUrlToWatch,
    title,
    onAddURLClick,
    videoURL,
    setVideoURL,
    handleWatchNowClick,
    isVideoURLAdding,
  } = useAnimeAddVideoUrl();
  const { isMobile } = useResizeScreen();

  return (
    <>
      <Grid container spacing={2}>
        {animeWatchlist.map((anime) => (
          <Grid item xs={12} md={4} lg={4} key={anime._id}>
            <AnimewatchlistCard
              animeId={anime._id}
              status={anime.animeStatus}
              {...anime}
              onDeleteClick={handleDeleteFromWatchlistClick}
              onStatusClick={handleStatusClick}
              onWatchVideoClick={handleWatchVideoClick}
              isAnimeDeletingFromWatchlist={isAnimeDeletingFromWatchlist}
              videoUrlToWatch={anime?.urlToWatch}
            />
          </Grid>
        ))}
      </Grid>
      <AnimeWatchVideoDialog
        open={isWatchVideoDialogOpen}
        onClose={handleWatchVideoDialogClose}
        videoUrlToWatch={videoUrlToWatch}
        title={title}
        onAddURLClick={onAddURLClick}
        videoURLText={videoURL}
        setVideoURL={setVideoURL}
        onWatchNowClick={handleWatchNowClick}
        isVideoURLAdding={isVideoURLAdding}
        isMobile={isMobile}
      />
    </>
  );
};

AnimeWatchlist.propTypes = {
  animeWatchlist: PropTypes.array,
};

AnimeWatchlist.defaultProps = {
  animeWatchlist: [],
};

export default AnimeWatchlist;
