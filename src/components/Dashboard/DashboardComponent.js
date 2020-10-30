import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import AnimeDetailDialogContainer from 'containers/AnimeDetailDialogContainer/AnimeDetailDialogContainer';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
import Header from '../Header/Header';
import DashboardContent from './DashboardContent';
import DrawerContainer from '../../containers/CustomDrawerContainer/DrawerContainer';
import ThemeDialog from '../utilityComponents/ThemeDialog';
import LogoutDialog from '../utilityComponents/LogoutDialog';
import AnimeDeleteDialog from '../utilityComponents/DeleteAnimeDialog';

const useStyles = makeStyles(() => ({
  rightGridStyle: {
    marginLeft: '-30px',
  },
  noGridStyle: {},
}));

const DashboardComponent = () => {
  const classes = useStyles();
  const { isMobile } = useResizeScreen();
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={isMobile ? null : 1}>
          <DrawerContainer />
        </Grid>
        <Grid
          item
          xs={isMobile ? 12 : 11}
          className={isMobile ? classes.noGridStyle : classes.rightGridStyle}
        >
          <Header isSearchBarRequired isAvatarPopUpRequired />
          <DashboardContent />
          <ThemeDialog />
          <LogoutDialog />
          <AnimeDeleteDialog />
          <AnimeDetailDialogContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardComponent;
