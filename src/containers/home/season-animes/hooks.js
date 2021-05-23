import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getSeasonAnimesAPI } from 'services/animeService';
import { getCurrentSeason, getCurrentYear } from './utils';

export const useSeasonAnimes = () => {
  const currentYear = useMemo(() => getCurrentYear(), []);
  const currentSeason = useMemo(() => getCurrentSeason(), []);

  const { data, isLoading: isTopAnimesLoading } = useQuery(
    ['fetch-season-animes', currentYear, currentSeason],
    () => getSeasonAnimesAPI(currentYear, currentSeason),
    {
      enabled: !!currentYear && !!currentSeason,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return {
    seasonAnimes: data?.data?.seasonAnimes,
    isTopAnimesLoading,
  };
};
