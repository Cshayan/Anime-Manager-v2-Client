import { useState, useEffect } from 'react';
import { useQuery } from 'react-query';
import qs from 'query-string';
import { APIS } from 'services/authService';
import { getUserWatchlistAPI } from 'services/animeService';

export const useGetSpecificUser = (props) => {
  const { id = '', name = '' } = qs.parse(props.location.search);
  const [scrollElement, setScrollElement] = useState({
    visible: false,
  });

  useEffect(() => {
    const handleScrollDown = () => {
      const currentScrollPos = window.pageYOffset;
      setScrollElement({
        ...scrollElement,
        visible: currentScrollPos > 10,
      });
    };

    window.addEventListener('scroll', handleScrollDown, true);

    return () => window.removeEventListener('scroll', handleScrollDown, true);
  }, []);

  const getUserDetails = async (params) => {
    const { queryKey } = params;
    return APIS.getSpecificUser({ id: queryKey[1], name: queryKey[2] });
  };

  const getUserWatchlist = async (params) => {
    const { queryKey } = params;
    return getUserWatchlistAPI({ id: queryKey[1] });
  };

  const {
    data: { data: { user = {} } = {} } = {},
    isError,
    isLoading: isUserDataLoading,
  } = useQuery(['get-specific-user', id, name], getUserDetails, {
    refetchOnWindowFocus: false,
    refetchOnMount: false,
  });

  const { data: { data: { count, data = [] } = {} } = {} } = useQuery(
    ['get-specific-user-watchlist', id],
    getUserWatchlist,
    {
      enabled: !isError && !isUserDataLoading,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  );

  return {
    scrollElement,
    user,
    isError,
    isUserDataLoading,
    watchlistCount: count,
    watchlist: data,
  };
};
