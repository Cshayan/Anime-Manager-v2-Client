import { useState } from 'react';
import { useQuery, useInfiniteQuery } from 'react-query';
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

export const useInfiniteTopAnimes = () => {
  const [currentpage, setCurrentPage] = useState(1);

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery(
      ['fetch-top-animes-infinite'],
      ({ pageParam = 1 }) => getTopAnimesAPI(pageParam, 'airing', 50),
      {
        getNextPageParam: (lastPage) => lastPage.nextCursor,
        refetchOnWindowFocus: false,
      },
    );

  return {
    topAnimes: data?.pages,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    currentpage,
    setCurrentPage,
  };
};
