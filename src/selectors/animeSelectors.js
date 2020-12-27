/* Selectors related to watchlist */
const selectIsAnimeLoading = ({ anime: { isAnimeLoading = false } }) =>
  isAnimeLoading;
const selectWatchlist = ({ anime: { watchlist = [] } }) => watchlist;
const selectAnimeId = ({ anime: { animeIdToDelete = '' } }) => animeIdToDelete;
const selectIsAnimeAddingToWatchlist = ({ anime: { isAnimeAdding = false } }) =>
  isAnimeAdding;
const selectIsAnimeDeletingFromWatchlist = ({
  anime: { isAnimeDeleting = false },
}) => isAnimeDeleting;
const selectIsAnimeVideoURLAdding = ({
  anime: { isAnimeVideoURLAdding = false },
}) => isAnimeVideoURLAdding;

/*  Selectors related to anime detail dialog in dashboard page */
const selectIsAnimeDetailDialogOpen = ({
  dialog: { isAnimeDetailDialogOpen },
}) => isAnimeDetailDialogOpen;
const selectAnimeDialogDetail = ({ anime: { animeDialogDetail = {} } }) =>
  animeDialogDetail;

/* Selectors related to anime filters in dashboard page */
const selectSelectedFilter = ({
  animeFilter: { selectedFilter = 'Watching' },
}) => selectedFilter;
const selectFilteredWatchlist = ({ animeFilter: { filteredWatchlist = [] } }) =>
  filteredWatchlist;

/* Selectors related to specific anime details to specific anime-details page */
const selectAnimeDetailsLoading = ({
  animeDetails: { isAnimeDetailsLoading = false } = {},
}) => isAnimeDetailsLoading;
const selectAnimeDetails = ({
  animeDetails: { details: { data = {} } = {} } = {},
}) => data;
const selectIsAnimeAlreadyPresent = ({
  animeDetails: { details: { isAnimeAlreadyPresent = false } = {} } = {},
}) => isAnimeAlreadyPresent;

/* Selectors related to anime reviews in anime-details page */
const selectIsAnimeReviewsLoading = ({
  animeReview: { isReviewsLoading = false } = {},
}) => isReviewsLoading;
const selectAnimeReviews = ({ animeReview: { reviews = [] } = {} }) => reviews;

/* Theme selector */
const selectIsDarkModeEnabled = ({ darkMode: { isDarkModeEnabled } }) =>
  isDarkModeEnabled;

export {
  selectIsAnimeLoading,
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
  selectIsDarkModeEnabled,
  selectIsAnimeVideoURLAdding,
};
