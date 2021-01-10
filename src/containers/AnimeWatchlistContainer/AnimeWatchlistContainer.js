import React from 'react';
import { makeStyles } from '@material-ui/core/';
import {
  useFocus,
  useGlobalSearchAnime,
} from 'custom-hooks/globalAnimeSearchHook';
import {
  useAnime,
  useAnimeFilter,
  useAnimeWatchlistGridListView,
  useShareWatchlist,
} from 'custom-hooks/animeHook';
import AnimeWatchlistGrid from 'components/AnimeWatchlistComponent/AnimeWatchlist';
import AnimeWatchListView from 'components/AnimeWatchlistComponent/AnimeWatchListView';
import AnimeWatchlistHeader from 'components/AnimeWatchlistComponent/AnimeWatchlistHeader';
import StateView from 'components/StateView/StateView';
import LotteAnimation from 'components/utilityComponents/LotteAnimation';
import AnimeGlobalSearchListContainer from 'containers/AnimeGlobalSearchListContainer/AnimeGlobalSearchListContainer';
import noDataAnimation from 'assets/animation/no-data.json';
import searchAnimation from 'assets/animation/search.json';
import animeLoadingAnimation from 'assets/animation/anime-loading.json';
import animeNotFoundAnimation from 'assets/animation/anime-not-found.json';
import filterNotFoundAnimation from 'assets/animation/filter-not-found.json';
import Error from 'assets/report.svg';

const useStyles = makeStyles((theme) => ({
  searchlistContainer: {
    padding: theme.typography.pxToRem(20),
    display: 'flex',
    flexDirection: 'column',
    overflowX: 'hidden',
    overflowY: 'auto',
    width: '100%',
    height: '100%',
  },
}));

const AnimeWatchlistContainer = () => {
  const { isSearchBarFoccused } = useFocus();
  const {
    isAnimeLoading,
    searchResults,
    searchError,
    animeText,
  } = useGlobalSearchAnime();
  const { animeWatchlist } = useAnime();
  const { filteredWatchlist, selectedFilter } = useAnimeFilter();
  const { defaultView, onGridClick } = useAnimeWatchlistGridListView();
  const { handleShareWatchlistIconClick } = useShareWatchlist();
  const classes = useStyles();

  if (isSearchBarFoccused && isAnimeLoading) {
    return (
      <>
        <LotteAnimation
          defaultOptions={{
            loop: true,
            autoplay: true,
            animationData: animeLoadingAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width="30%"
          textToRender="Loading.. Please wait."
        />
      </>
    );
  }

  if (isSearchBarFoccused && animeText.length === 0) {
    return (
      <>
        <LotteAnimation
          defaultOptions={{
            loop: true,
            autoplay: true,
            animationData: searchAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width="30%"
          textToRender="Go on. Search your favourite anime!"
        />
      </>
    );
  }

  if (
    isSearchBarFoccused &&
    !isAnimeLoading &&
    searchResults.length === 0 &&
    searchError === null
  ) {
    return (
      <>
        <LotteAnimation
          defaultOptions={{
            loop: true,
            autoplay: true,
            animationData: animeNotFoundAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width="40%"
          textToRender="Oops! No result found. Please check if the anime name is spelled correct."
        />
      </>
    );
  }

  if (
    isSearchBarFoccused &&
    searchResults.length === 0 &&
    searchError !== null
  ) {
    return (
      <>
        <StateView
          textToRender="Something went wrong. Please try after some time."
          imageToRender={Error}
        />
      </>
    );
  }

  if (isSearchBarFoccused && searchResults.length > 0) {
    return (
      <>
        <AnimeGlobalSearchListContainer animeSearchResults={searchResults} />
      </>
    );
  }

  if (selectedFilter !== 'Total' && filteredWatchlist.length === 0) {
    return (
      <>
        <LotteAnimation
          defaultOptions={{
            loop: true,
            autoplay: true,
            animationData: filterNotFoundAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width="20%"
          textToRender="No results found for the applied filter."
        />
      </>
    );
  }

  return (
    <>
      {animeWatchlist.length === 0 ? (
        <LotteAnimation
          defaultOptions={{
            loop: true,
            autoplay: true,
            animationData: noDataAnimation,
            rendererSettings: {
              preserveAspectRatio: 'xMidYMid slice',
            },
          }}
          width="40%"
          textToRender="Looks like you haven't added any anime to your watchlist yet!"
        />
      ) : (
        <div className={classes.searchlistContainer}>
          <AnimeWatchlistHeader
            defaultView={defaultView}
            onGridClick={onGridClick}
            onShareIconClick={handleShareWatchlistIconClick}
          />
          {defaultView === 'grid' ? (
            <AnimeWatchlistGrid
              animeWatchlist={
                selectedFilter !== 'Total' || filteredWatchlist.length > 0
                  ? filteredWatchlist
                  : animeWatchlist
              }
            />
          ) : (
            <AnimeWatchListView
              animeWatchlist={
                selectedFilter !== 'Total' || filteredWatchlist.length > 0
                  ? filteredWatchlist
                  : animeWatchlist
              }
            />
          )}
        </div>
      )}
    </>
  );
};

export default AnimeWatchlistContainer;
