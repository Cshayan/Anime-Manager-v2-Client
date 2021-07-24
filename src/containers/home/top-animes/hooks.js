import { useQuery } from 'react-query';
import { getTopAnimesAPI } from 'services/animeService';

export const useTopAnimes = () => {
  const { data, isLoading: isTopAnimesLoading } = useQuery(
    ['fetch-top-animes'],
    () => getTopAnimesAPI(),
    {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return {
    topAnimes: data?.data?.topAnimes,
    isTopAnimesLoading,
  };
};
