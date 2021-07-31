import { useState, useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';
import moment from 'moment';
import { useGetAnimeWatchlist } from 'custom-hooks/animeHook';
import { selectIsAnimeLoading } from 'selectors/animeSelectors';

const selectWatchlist = ({ anime: { watchlist = [] } }) => watchlist;

export const useAnimeStatistics = () => {
  const watchlist = useSelector(selectWatchlist);
  const [animeStats, setAnimeStats] = useState({
    total: 0,
    completed: 0,
    watching: 0,
    unwatched: 0,
    hold: 0,
    dropped: 0,
  });

  useEffect(() => {
    setAnimeStats({
      ...animeStats,
      total: watchlist.length,
      completed: watchlist.filter((list) => list.animeStatus === 'Completed')
        .length,
      watching: watchlist.filter((list) => list.animeStatus === 'Watching')
        .length,
      unwatched: watchlist.filter((list) => list.animeStatus === 'Unwatched')
        .length,
      hold: watchlist.filter((list) => list.animeStatus === 'On Hold').length,
      dropped: watchlist.filter((list) => list.animeStatus === 'Dropped')
        .length,
    });
  }, [watchlist]);

  return {
    watchlist,
    animeStats,
  };
};

export const useAnimeWatchlistStatsAndCharts = () => {
  useGetAnimeWatchlist()
  const watchlist = useSelector(selectWatchlist);
  const isAnimeLoading = useSelector(selectIsAnimeLoading);


  return {
    isAnimeLoading,
    watchlist,
  };
};

export const useActivityHistoryTimeLine = (isDarkModeEnabled) => {
  const watchlist = useSelector(selectWatchlist);
  const [activityTheme, setActivityTheme] = useState({});

  useEffect(() => {
    if (isDarkModeEnabled) {
      setActivityTheme({
        primary: '#5DDAE0',
        secondary: 'linear-gradient(315deg, #485461 0%, #28313b 74%)',
        cardBgColor: 'linear-gradient(315deg, #485461 0%, #28313b 74%)',
        cardForeColor: '#fff',
      });
    } else {
      setActivityTheme({
        primary: '#27ae60',
        secondary: 'linear-gradient(315deg, #485461 0%, #28313b 74%)',
        cardBgColor: 'linear-gradient(to right, #ece9e6, #ffffff)',
        cardForeColor: '#111',
      });
    }
  }, [isDarkModeEnabled]);

  const items = useMemo(() => {
    if (watchlist.length > 0) {
      return watchlist.map((list) => {
        const obj = {
          title: moment(list?.addedAt).format('DD, MMM YYYY'),
          cardTitle: list.animeData?.title,
          media: {
            type: 'IMAGE',
            source: {
              url: list.animeData?.imageUrl,
            },
          },
        };
        return obj;
      });
    }
    return [];
  }, [watchlist]);

  return {
    items,
    activityTheme,
  };
};
