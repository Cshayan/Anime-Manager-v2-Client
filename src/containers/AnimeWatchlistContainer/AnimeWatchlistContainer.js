import React from 'react';
import {
  useFocus,
  useGlobalSearchAnime,
} from '../../custom-hooks/globalAnimeSearchHook';
import { useAnime } from '../../custom-hooks/animeHook';
import AnimeWatchlist from '../../components/AnimeWatchlistComponent/AnimeWatchlist';
import StateView from '../../components/StateView/StateView';
import AnimeGlobalSearchListContainer from '../AnimeGlobalSearchListContainer/AnimeGlobalSearchListContainer';
import NoAnimeImg from '../../assets/noAnimeImg.svg';
import SearchAnime from '../../assets/searchAnime.svg';
import HourGlass from '../../assets/hourglass.svg';
// import Sweat from "../../assets/sweat.svg";
import Error from '../../assets/report.svg';

const AnimeWatchlistContainer = () => {
  const { isSearchBarFoccused } = useFocus();
  const { isAnimeLoading, searchResults, searchError } = useGlobalSearchAnime();
  const { animeWatchlist } = useAnime();

  if (isSearchBarFoccused && isAnimeLoading) {
    return (
      <>
        <StateView
          textToRender="Loading... Please wait."
          imageToRender={HourGlass}
          isAnimationRequired
        />
      </>
    );
  }

  // if (
  //   isSearchBarFoccused &&
  //   !isAnimeLoading &&
  //   searchResults.length === 0 &&
  //   searchError === null
  // ) {
  //   return (
  //     <>
  //       <StateView
  //         textToRender="Oops! No result found. Please check if the anime name is spelled correct."
  //         imageToRender={Sweat}
  //       />
  //     </>
  //   );
  // }

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

  if (isSearchBarFoccused) {
    return (
      <>
        <StateView
          textToRender="Go on. Search your anime."
          imageToRender={SearchAnime}
          isAnimationRequired
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
        <AnimeWatchlist animeWatchlist={animeWatchlist} />
      )}
    </>
  );
};

export default AnimeWatchlistContainer;
