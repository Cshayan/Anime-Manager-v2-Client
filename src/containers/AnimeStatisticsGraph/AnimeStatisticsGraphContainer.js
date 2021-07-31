import React from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import Header from 'components/Header/Header';
import AnimePieChartStats from 'components/AnimeStatCard/AnimePieChartStats';
import Lottie from 'react-lottie';
import { useAuthentication, useGetMe } from 'custom-hooks/authHook';
import {
  useAnimeWatchlistStatsAndCharts,
  useAnimeStatistics,
} from 'custom-hooks/statsHook';
import { useDarkMode } from 'custom-hooks/darkModeHook';
import noStatAnimation from 'assets/animation/no-stat.json';
import WatchlistSelectSearch from './WatchlistSelectSearch';
import ActivityHistoryTimeLine from './ActivityHistoryTimeline';

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: noStatAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const useStyles = makeStyles((theme) => ({
  noStatText: {
    fontSize: '1.5rem',
    color: theme.palette.text.primary,
    letterSpacing: '0.1rem',
    overflow: 'hidden',
    textAlign: 'center',
  },
  statCont: {
    marginTop: '1rem',
    display: 'grid',
    gridTemplateColumns: '1fr 1.2fr',
    gridGap: '10px',
  },
  '@media screen and (max-width: 600px)': {
    noStatText: {
      fontSize: '1rem',
    },
    statCont: {
      gridTemplateColumns: '1fr',
      padding: '1rem',
    },
  },
}));

const AnimeStatisticsGraphContainer = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuthentication();
  useGetMe();
  const { watchlist } = useAnimeWatchlistStatsAndCharts();
  const { animeStats } = useAnimeStatistics();
  const { isDarkModeEnabled } = useDarkMode();

  if (!isAuthenticated) {
    return <Redirect to="/auth" />;
  }
  return (
    <>
      <Header isBackButtonRequired isAvatarPopUpRequired />
      {watchlist.length === 0 ? (
        <>
          <Lottie options={defaultOptions} width={300} height={400} />
          <Typography className={classes.noStatText}>
            No statistics to show now. Try adding any anime to your watchlist to
            view this section!
          </Typography>
        </>
      ) : (
        <>
          <div>
            <WatchlistSelectSearch
              watchlist={watchlist}
              isDarkModeEnabled={isDarkModeEnabled}
            />
          </div>
          <div className={classes.statCont}>
            <ActivityHistoryTimeLine
              watchlist={watchlist}
              isDarkModeEnabled={isDarkModeEnabled}
            />
            <AnimePieChartStats
              total={animeStats?.total}
              watching={animeStats?.watching}
              completed={animeStats?.completed}
              dropped={animeStats?.dropped}
              hold={animeStats?.hold}
              unwatched={animeStats?.unwatched}
            />
          </div>
        </>
      )}
    </>
  );
};

export default AnimeStatisticsGraphContainer;
