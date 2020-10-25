import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  openAnimeDeleteDialog,
  closeAnimeDeleteDialog,
  openAnimeDetailDialog,
  closeAnimeDetailDialog,
} from 'actions/dialogAction';
import {
  addAnimeWatchlistStart,
  getAnimeWatchlistStart,
  setAnimeIdToDelete,
  deleteAnimeWatchlistStart,
  setAnimeDialogDetail,
  animeStatusSaveStart,
} from '../actions/animeAction';

const selectWatchlist = ({ anime: { watchlist = [] } }) => watchlist;
const selectAnimeId = ({ anime: { animeIdToDelete = '' } }) => animeIdToDelete;
const selectIsAnimeDetailDialogOpen = ({
  dialog: { isAnimeDetailDialogOpen },
}) => isAnimeDetailDialogOpen;
const selectAnimeDialogDetail = ({ anime: { animeDialogDetail = {} } }) =>
  animeDialogDetail;

export const useAnime = () => {
  const dispatch = useDispatch();
  const animeWatchlist = useSelector(selectWatchlist);
  const animeIdToDelete = useSelector(selectAnimeId);

  const handleAnimeAddToWatchlistClick = (animeData) => {
    addAnimeToWatchlist(animeData);
  };

  const handleDeleteFromWatchlistClick = (id) => {
    dispatch(openAnimeDeleteDialog());
    dispatch(setAnimeIdToDelete(id));
  };

  const addAnimeToWatchlist = (animeData) => {
    dispatch(addAnimeWatchlistStart(animeData));
  };

  const deleteAnimeFromWatchlist = () => {
    dispatch(deleteAnimeWatchlistStart(animeIdToDelete));
    dispatch(closeAnimeDeleteDialog());
    dispatch(setAnimeIdToDelete(''));
  };

  const fetchAnimes = useCallback(() => {
    dispatch(getAnimeWatchlistStart());
  }, [dispatch]);

  return {
    handleAnimeAddToWatchlistClick,
    fetchAnimes,
    animeWatchlist,
    handleDeleteFromWatchlistClick,
    deleteAnimeFromWatchlist,
  };
};

export const useAnimeDetailDialog = () => {
  const dispatch = useDispatch();
  const isAnimeDetailDialogOpen = useSelector(selectIsAnimeDetailDialogOpen);
  const animeDialogDetail = useSelector(selectAnimeDialogDetail);

  const handleStatusClick = (animeDetail) => {
    handleAnimeOpenDetailDialog();
    dispatch(setAnimeDialogDetail(animeDetail));
  };

  const handleAnimeOpenDetailDialog = () => {
    dispatch(openAnimeDetailDialog());
  };

  const handleAnimeCloseDetailDialog = () => {
    dispatch(closeAnimeDetailDialog());
  };

  const handleSaveAnimeStatus = (data) => {
    dispatch(animeStatusSaveStart(data));
    handleAnimeCloseDetailDialog();
  };

  return {
    handleStatusClick,
    isAnimeDetailDialogOpen,
    handleAnimeCloseDetailDialog,
    animeDialogDetail,
    handleSaveAnimeStatus,
  };
};
