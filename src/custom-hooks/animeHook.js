import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import copy from 'copy-to-clipboard';
import { useQuery } from 'react-query';
import {
  openAnimeDeleteDialog,
  closeAnimeDeleteDialog,
  openAnimeDetailDialog,
  closeAnimeDetailDialog,
  shareWatchlistDialogOpen,
  shareWatchlistDialogClose,
} from 'actions/dialogAction';
import UnwatchedIcon from 'assets/unwatched.svg';
import CompletedIcon from 'assets/completed.svg';
import WatchingIcon from 'assets/watching.svg';
import OnHoldIcon from 'assets/hold.svg';
import DroppedIcon from 'assets/dropped.svg';
import {
  addAnimeWatchlistStart,
  setAnimeIdToDelete,
  deleteAnimeWatchlistStart,
  setAnimeDialogDetail,
  animeStatusSaveStart,
  setAnimeFilter,
  getAnimeDetailsStart,
  getAnimeReviewStart,
  setAnimeVideoURLStart,
  getAnimeWatchlistSuccess,
} from 'actions/animeAction';
import { getAnimeWatchlist } from 'services/animeService';
import { snackBarOpen } from 'actions/snackbarAction';
import {
  selectWatchlist,
  selectAnimeId,
  selectIsAnimeAddingToWatchlist,
  selectIsAnimeDeletingFromWatchlist,
  selectIsAnimeDetailDialogOpen,
  selectAnimeDialogDetail,
  selectSelectedFilter,
  selectFilteredWatchlist,
  selectAnimeDetailsLoading,
  selectAnimeDetails,
  selectIsAnimeAlreadyPresent,
  selectIsAnimeReviewsLoading,
  selectAnimeReviews,
  selectIsAnimeVideoURLAdding,
  selectShareWatchlistLink,
} from 'selectors/animeSelectors';

export const useGetAnimeWatchlist = () => {
  const dispatch = useDispatch();

    // fetch user anime watchlist on mount
  useQuery(['get-anime-watchlist'], () => getAnimeWatchlist(), {
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    onSuccess: async data => {
      const { data: watchlistData } = data;
      dispatch(getAnimeWatchlistSuccess(watchlistData))
    }
  });
}

export const useAnime = () => {
  const dispatch = useDispatch();
  const animeWatchlist = useSelector(selectWatchlist);
  const animeIdToDelete = useSelector(selectAnimeId);
  const isAnimeAddingToWatchlist = useSelector(selectIsAnimeAddingToWatchlist);
  const isAnimeDeletingFromWatchlist = useSelector(
    selectIsAnimeDeletingFromWatchlist,
  );

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

  return {
    isAnimeAddingToWatchlist,
    isAnimeDeletingFromWatchlist,
    handleAnimeAddToWatchlistClick,
    animeWatchlist,
    handleDeleteFromWatchlistClick,
    deleteAnimeFromWatchlist,
  };
};

export const useAnimeDetailDialog = () => {
  const dispatch = useDispatch();
  const isAnimeDetailDialogOpen = useSelector(selectIsAnimeDetailDialogOpen);
  const { title = '', imageUrl = '', animeId = '', status = '' } = useSelector(
    selectAnimeDialogDetail,
  );
  const [statusValue, setStatusValue] = useState('');
  const [icon, setIcon] = useState('');

  useEffect(() => {
    if (status) {
      setStatusValue(status);

      switch (status) {
        case 'Unwatched':
          setIcon(UnwatchedIcon);
          break;
        case 'Watching':
          setIcon(WatchingIcon);
          break;
        case 'Completed':
          setIcon(CompletedIcon);
          break;
        case 'On Hold':
          setIcon(OnHoldIcon);
          break;
        case 'Dropped':
          setIcon(DroppedIcon);
          break;
        default:
          setIcon(UnwatchedIcon);
      }
    }
  }, [status]);

  const statusArray = [
    { title: 'Unwatched', icon: UnwatchedIcon },
    { title: 'Watching', icon: WatchingIcon },
    { title: 'Completed', icon: CompletedIcon },
    { title: 'On Hold', icon: OnHoldIcon },
    { title: 'Dropped', icon: DroppedIcon },
  ];

  const finalStatus = statusArray.filter(
    (animeStatus) => animeStatus.title !== statusValue,
  );

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
    title,
    imageUrl,
    animeId,
    status,
    handleSaveAnimeStatus,
    finalStatus,
    icon,
  };
};

export const useAnimeFilter = () => {
  const selectedFilter = useSelector(selectSelectedFilter);
  const animeWatchlist = useSelector(selectWatchlist);
  const filteredWatchlist = useSelector(selectFilteredWatchlist);
  const dispatch = useDispatch();

  const handleFilterButtonClick = (type) => {
    let filteredList = [];
    if (type === 'Total') {
      filteredList = [];
    } else {
      filteredList = animeWatchlist.filter(
        (anime) => anime.animeStatus === type,
      );
    }
    dispatch(setAnimeFilter({ filterType: type, filterValue: filteredList }));
  };

  return {
    selectedFilter,
    filteredWatchlist,
    handleFilterButtonClick,
  };
};

export const useAnimeDetails = (malId) => {
  const animeDetails = useSelector(selectAnimeDetails);
  const isAnimeDetailsLoading = useSelector(selectAnimeDetailsLoading);
  const isAnimeAlreadyPresent = useSelector(selectIsAnimeAlreadyPresent);
  const dispatch = useDispatch();

  useEffect(() => {
    if (malId) {
      dispatch(getAnimeDetailsStart(malId));
    }
  }, []);

  return {
    isAnimeDetailsLoading,
    isAnimeAlreadyPresent,
    animeDetails,
  };
};

export const useAnimeReviews = (malId) => {
  const isAnimeReviewsLoading = useSelector(selectIsAnimeReviewsLoading);
  const animeReviews = useSelector(selectAnimeReviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAnimeReviewStart(malId));
  }, []);

  const handleReviewReadMoreClick = (urlToOpen) => {
    const win = window.open(urlToOpen, '_blank');
    if (win != null) {
      win.focus();
    }
  };

  return {
    isAnimeReviewsLoading,
    animeReviews,
    handleReviewReadMoreClick,
  };
};

export const useAnimeWatchlistGridListView = () => {
  const [defaultView, setDefaultView] = useState('grid');

  const onGridClick = (view) => {
    if (view === 'grid') {
      setDefaultView('list');
    } else {
      setDefaultView('grid');
    }
  };

  return {
    defaultView,
    onGridClick,
  };
};

export const useAnimeAddVideoUrl = () => {
  const dispatch = useDispatch();
  const {
    title = '',
    imageUrl = '',
    animeId = '',
    status = '',
    videoUrlToWatch = '',
  } = useSelector(selectAnimeDialogDetail);
  const isVideoURLAdding = useSelector(selectIsAnimeVideoURLAdding);
  const [isWatchVideoDialogOpen, setIsWatchVideoDialog] = useState(false);
  const [videoURL, setVideoURL] = useState('');

  const handleWatchVideoClick = (animeDetail) => {
    dispatch(setAnimeDialogDetail(animeDetail));
    setIsWatchVideoDialog(true);
  };

  const handleWatchVideoDialogClose = () => {
    setIsWatchVideoDialog(false);
  };

  const onAddURLClick = (e) => {
    e.preventDefault();
    const data = { animeId, urlToWatch: videoURL };
    dispatch(setAnimeVideoURLStart(data));
    setVideoURL('');
    handleWatchVideoDialogClose();
  };

  const handleWatchNowClick = () => {
    window.open(videoUrlToWatch, '_blank');
  };

  return {
    title,
    imageUrl,
    animeId,
    status,
    videoUrlToWatch,
    isWatchVideoDialogOpen,
    handleWatchVideoClick,
    handleWatchVideoDialogClose,
    onAddURLClick,
    videoURL,
    setVideoURL,
    handleWatchNowClick,
    isVideoURLAdding,
  };
};

export const useShareWatchlist = () => {
  const shareWatchlistLink = useSelector(selectShareWatchlistLink);
  const dispatch = useDispatch();
  const selectIsDialogOpen = ({
    dialog: { isShareWatchlistDialogOpen = false } = {},
  }) => isShareWatchlistDialogOpen;
  const isShareWatchlistDialogOpen = useSelector(selectIsDialogOpen);
  const linkRef = useRef(null);

  const handleShareWatchlistIconClick = () => {
    dispatch(shareWatchlistDialogOpen());
  };

  const handleShareWatchlistDialogClose = () => {
    dispatch(shareWatchlistDialogClose());
  };

  const handleCopyLinkClick = (text) => {
    linkRef.current.select();
    copy(text);
    dispatch(snackBarOpen('Copied to clipboard!', 'success'));
  };

  return {
    shareWatchlistLink,
    isShareWatchlistDialogOpen,
    handleShareWatchlistIconClick,
    handleShareWatchlistDialogClose,
    handleCopyLinkClick,
    linkRef,
  };
};
