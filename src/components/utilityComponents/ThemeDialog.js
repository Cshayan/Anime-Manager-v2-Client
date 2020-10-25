import React from 'react';
import {
  makeStyles,
  Dialog,
  DialogContent,
  Typography,
  IconButton,
} from '@material-ui/core';
import cls from 'classnames';
import { useSelector, useDispatch } from 'react-redux';
import { closeThemeDialog } from '../../actions/dialogAction';
import { ReactComponent as LightIcon } from '../../assets/lightIcon.svg';
import { ReactComponent as DarkIcon } from '../../assets/darkIcon.svg';
import { useDarkMode } from '../../custom-hooks/darkModeHook';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    fontSize: theme.typography.pxToRem(34),
    fontWeight: '500',
    letterSpacing: '0.1rem',
  },
  dialogContent: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
  themeContainer: {
    padding: `2rem 1rem`,
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  icon: {
    width: theme.typography.pxToRem(50),
    height: theme.typography.pxToRem(50),
    margin: `${theme.typography.pxToRem(10)} 0`,
  },
  themeText: {
    fontSize: theme.typography.pxToRem(22),
    color: theme.palette.text.primary,
  },
  themeInner: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
    cursor: 'pointer',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'all 0.6s',
    },
  },
  activeTheme: {
    background: theme.palette.primary.main,
    borderRadius: theme.typography.pxToRem(10),
    '&:hover': {
      background: theme.palette.primary.main,
    },
  },
  '@media screen and (max-width: 600px)': {
    dialogTitle: {
      fontSize: theme.typography.pxToRem(28),
    },
    icon: {
      width: theme.typography.pxToRem(40),
      height: theme.typography.pxToRem(40),
    },
    themeText: {
      fontSize: theme.typography.pxToRem(18),
    },
    themeInner: {
      padding: '0.5rem',
    },
  },
}));

const ThemeDialog = () => {
  const selectIsThemeDialogOpen = ({ dialog: { isThemeDialogOpen } }) =>
    isThemeDialogOpen;
  const isThemeDialogOpen = useSelector(selectIsThemeDialogOpen);
  const dispatch = useDispatch();
  const { isDarkModeEnabled, toggleDarkMode } = useDarkMode();

  const handleThemeDialogClose = () => {
    dispatch(closeThemeDialog());
  };

  const classes = useStyles();

  return (
    <div>
      <Dialog open={isThemeDialogOpen} onClose={handleThemeDialogClose}>
        <DialogContent className={classes.dialogContent}>
          <Typography className={classes.dialogTitle}>
            Choose your own theme
          </Typography>
          <div className={classes.themeContainer}>
            <IconButton
              className={cls(classes.themeInner, {
                [classes.activeTheme]: !isDarkModeEnabled,
              })}
              onClick={toggleDarkMode}
            >
              <LightIcon className={classes.icon} />
              <Typography className={classes.themeText}>Light Theme</Typography>
            </IconButton>
            <IconButton
              className={cls(classes.themeInner, {
                [classes.activeTheme]: isDarkModeEnabled,
              })}
              onClick={toggleDarkMode}
            >
              <DarkIcon className={classes.icon} />
              <Typography className={classes.themeText}>Dark Theme</Typography>
            </IconButton>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ThemeDialog;
