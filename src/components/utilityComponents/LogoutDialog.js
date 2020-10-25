import React from 'react';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  Button,
} from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { closeLogoutDialog } from '../../actions/dialogAction';
import { useLogOut } from '../../custom-hooks/authHook';
import { ReactComponent as ConfirmIcon } from '../../assets/confirmation.svg';

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
    width: theme.typography.pxToRem(40),
    height: theme.typography.pxToRem(40),
    margin: `0 ${theme.typography.pxToRem(5)}`,
  },
  '@media screen and (max-width: 600px)': {},
}));

const LogoutDialog = () => {
  const dispatch = useDispatch();
  const selectLogoutDialog = (state) => state.dialog.isLogoutDialogOpen;
  const isLogoutDialogOpen = useSelector(selectLogoutDialog);
  const { logOutUser } = useLogOut();

  const handleLogoutDialogClose = () => {
    dispatch(closeLogoutDialog());
  };

  const handleYesClick = () => {
    logOutUser();
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog open={isLogoutDialogOpen} onClose={handleLogoutDialogClose}>
        <DialogContent className={classes.dialogContent}>
          <Typography className={classes.dialogTitle}>
            <ConfirmIcon className={classes.icon} /> Are you sure you want to
            logout?
          </Typography>
        </DialogContent>
        <div className={classes.logoutContainer}>
          <Button
            className={classes.noButton}
            onClick={handleLogoutDialogClose}
          >
            No
          </Button>
          <Button className={classes.yesButton} onClick={handleYesClick}>
            Yes
          </Button>
        </div>
      </Dialog>
    </div>
  );
};

export default LogoutDialog;
