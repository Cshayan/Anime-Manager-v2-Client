import React from 'react';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { closeAnimeDeleteDialog } from '../../actions/dialogAction';
import { useAnime } from '../../custom-hooks/animeHook';
import { ReactComponent as CrossIcon } from '../../assets/cross.svg';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    fontSize: theme.typography.pxToRem(26),
    fontWeight: '500',
    letterSpacing: '0.1rem',
    textAlign: 'center',
    display: 'flex',
    alignItems: 'center',
  },
  dialogContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoutContainer: {
    width: '100%',
    marginTop: theme.typography.pxToRem(20),
  },
  noButton: {
    width: '50%',
    padding: '0.6rem',
    textAlign: 'center',
    background: '#c0392b',
    color: '#fff',
    fontSize: theme.typography.pxToRem(22),
    borderRadius: '0',
  },
  yesButton: {
    width: '50%',
    padding: '0.6rem',
    textAlign: 'center',
    background: '#27ae60',
    color: '#fff',
    fontSize: theme.typography.pxToRem(22),
    borderRadius: '0',
  },
  icon: {
    width: theme.typography.pxToRem(60),
    height: theme.typography.pxToRem(60),
    margin: `0 ${theme.typography.pxToRem(5)}`,
  },
  '@media screen and (max-width: 600px)': {},
}));

const DeleteAnimeDialog = () => {
  const dispatch = useDispatch();
  const selectAnimeDeleteDialog = (state) =>
    state.dialog.isAnimeDeleteDialogOpen;
  const isAnimeDeleteDialogOpen = useSelector(selectAnimeDeleteDialog);
  const { deleteAnimeFromWatchlist } = useAnime();

  const handleDeleteAnimeDialogClose = () => {
    dispatch(closeAnimeDeleteDialog());
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog
        open={isAnimeDeleteDialogOpen}
        onClose={handleDeleteAnimeDialogClose}
      >
        <DialogContent className={classes.dialogContent}>
          <Typography className={classes.dialogTitle}>
            <CrossIcon className={classes.icon} /> This anime will be deleted
            permanently from your watchlist. Are you sure?
          </Typography>
        </DialogContent>
        <div className={classes.logoutContainer}>
          <Button
            className={classes.noButton}
            onClick={handleDeleteAnimeDialogClose}
          >
            No, don't delete.
          </Button>
          <Button
            className={classes.yesButton}
            onClick={() => deleteAnimeFromWatchlist()}
          >
            Yes, please delete.
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default DeleteAnimeDialog;
