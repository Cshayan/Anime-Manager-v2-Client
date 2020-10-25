import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

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
