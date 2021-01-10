import {
  THEME_DIALOG_OPEN,
  THEME_DIALOG_CLOSE,
  LOGOUT_DIALOG_OPEN,
  LOGOUT_DIALOG_CLOSE,
  ANIME_DELETE_DIALOG_OPEN,
  ANIME_DELETE_DIALOG_CLOSE,
  ANIME_DETAIL_DIALOG_OPEN,
  ANIME_DETAIL_DIALOG_CLOSE,
  SHARE_WATCHLIST_DIALOG_OPEN,
  SHARE_WATCHLIST_DIALOG_CLOSE,
} from '../constants/dialogConstant';

export const openThemeDialog = () => ({
  type: THEME_DIALOG_OPEN,
});

export const closeThemeDialog = () => ({
  type: THEME_DIALOG_CLOSE,
});

export const openLogoutDialog = () => ({
  type: LOGOUT_DIALOG_OPEN,
});

export const closeLogoutDialog = () => ({
  type: LOGOUT_DIALOG_CLOSE,
});

export const openAnimeDeleteDialog = () => ({
  type: ANIME_DELETE_DIALOG_OPEN,
});

export const closeAnimeDeleteDialog = () => ({
  type: ANIME_DELETE_DIALOG_CLOSE,
});

export const openAnimeDetailDialog = () => ({
  type: ANIME_DETAIL_DIALOG_OPEN,
});

export const closeAnimeDetailDialog = () => ({
  type: ANIME_DETAIL_DIALOG_CLOSE,
});

export const shareWatchlistDialogOpen = () => ({
  type: SHARE_WATCHLIST_DIALOG_OPEN,
});

export const shareWatchlistDialogClose = () => ({
  type: SHARE_WATCHLIST_DIALOG_CLOSE,
});
