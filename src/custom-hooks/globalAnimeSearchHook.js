import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  animeSearchBarBlur,
  animeSearchBarFocus,
  animeSearchStart,
  setAnimeText,
} from "../actions/globalAnimeSearchAction";

const selectSearchBarFocus = (state) =>
  state.globalAnimeSearch.isSearchBarFocussed;
const selectIsAnimeLoading = ({ globalAnimeSearch: { isAnimeLoading } }) =>
  isAnimeLoading;
const selectSearchResults = ({ globalAnimeSearch: { searchResults = [] } }) =>
  searchResults;
const selectSearchError = ({ globalAnimeSearch: { error = null } }) => error;
const selectAnimeText = ({ globalAnimeSearch: { animeText = "" } }) =>
  animeText;

export const useFocus = () => {
  const dispatch = useDispatch();
  const isSearchBarFoccused = useSelector(selectSearchBarFocus);

  const onSearchBarFocus = () => {
    dispatch(animeSearchBarFocus());
  };

  const onSearchBarBlur = () => {
    dispatch(animeSearchBarBlur());
  };

  return {
    isSearchBarFoccused,
    onSearchBarBlur,
    onSearchBarFocus,
  };
};

export const useGlobalSearchAnime = () => {
  const [animeName, setAnimeName] = useState("");
  const dispatch = useDispatch();
  const isAnimeLoading = useSelector(selectIsAnimeLoading);
  const searchResults = useSelector(selectSearchResults);
  const searchError = useSelector(selectSearchError);
  const animeText = useSelector(selectAnimeText);

  const { isSearchBarFoccused } = useFocus();

  const onHandleAnimeNameChange = (e) => {
    setAnimeName(e.target.value);
  };

  const onHandleAnimeSearch = (e) => {
    e.preventDefault();
    if (isSearchBarFoccused) {
      dispatch(setAnimeText(animeName));
      dispatch(animeSearchStart(animeName));
    }
  };

  return {
    animeName,
    onHandleAnimeNameChange,
    onHandleAnimeSearch,
    isAnimeLoading,
    searchResults,
    searchError,
    animeText,
  };
};
