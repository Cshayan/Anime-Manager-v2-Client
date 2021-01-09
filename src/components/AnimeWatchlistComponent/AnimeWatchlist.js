import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core/';
import AnimeWatchVideoDialog from 'components/AnimeDetailDialog/AnimeWatchVideoDialog';
import ShareWatchlistDialog from 'components/ShareWatchlist/ShareWatchlistDialog';
import {
  useAnime,
  useAnimeDetailDialog,
  useAnimeAddVideoUrl,
  useShareWatchlist,
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
  const {
    shareWatchlistLink,
    isShareWatchlistDialogOpen,
    handleShareWatchlistDialogClose,
    handleCopyLinkClick,
    linkRef,
  } = useShareWatchlist();
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
      <ShareWatchlistDialog
        shareWatchlistLink={shareWatchlistLink}
        open={isShareWatchlistDialogOpen}
        onClose={handleShareWatchlistDialogClose}
        isMobile={isMobile}
        onCopyLinkClick={handleCopyLinkClick}
        linkRef={linkRef}
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
