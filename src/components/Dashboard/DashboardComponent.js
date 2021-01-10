import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';
import AnimeDetailDialogContainer from 'containers/AnimeDetailDialogContainer/AnimeDetailDialogContainer';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
import DrawerContainer from 'containers/CustomDrawerContainer/DrawerContainer';
import AnimeDeleteDialog from 'components/utilityComponents/DeleteAnimeDialog';
import DashboardContent from './DashboardContent';
import Header from '../Header/Header';

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
          <AnimeDeleteDialog />
          <AnimeDetailDialogContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default DashboardComponent;
