import React from 'react';
import {
  useFocus,
  useGlobalSearchAnime,
} from 'custom-hooks/globalAnimeSearchHook';
import { useAnime, useAnimeFilter } from 'custom-hooks/animeHook';
import AnimeWatchlist from 'components/AnimeWatchlistComponent/AnimeWatchlist';
import StateView from 'components/StateView/StateView';
import AnimeGlobalSearchListContainer from 'containers/AnimeGlobalSearchListContainer/AnimeGlobalSearchListContainer';
import NoAnimeImg from 'assets/noAnimeImg.svg';
import SearchAnime from 'assets/searchAnime.svg';
import HourGlass from 'assets/hourglass.svg';
import Sweat from 'assets/sweat.svg';
import Error from 'assets/report.svg';

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

  if (isSearchBarFoccused && isAnimeLoading) {
    return (
      <>
        <StateView
          textToRender="Loading... Please wait."
          imageToRender={HourGlass}
        />
      </>
    );
  }

  if (isSearchBarFoccused && animeText.length === 0) {
    return (
      <>
        <StateView
          textToRender="Go on. Search your favourite anime."
          imageToRender={SearchAnime}
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
        <StateView
          textToRender="Oops! No result found. Please check if the anime name is spelled correct."
          imageToRender={Sweat}
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
        <StateView
          textToRender="No results found for the applied filter."
          imageToRender={Error}
        />
      </>
    );
  }

  return (
    <>
      {animeWatchlist.length === 0 ? (
        <StateView
          textToRender="Looks like you haven't added any anime to your watchlist yet."
          imageToRender={NoAnimeImg}
        />
      ) : (
        <AnimeWatchlist
          animeWatchlist={
            selectedFilter !== 'Total' || filteredWatchlist.length > 0
              ? filteredWatchlist
              : animeWatchlist
          }
        />
      )}
    </>
  );
};

export default AnimeWatchlistContainer;
