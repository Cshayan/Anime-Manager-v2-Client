import React from 'react';
import { makeStyles, Grid } from '@material-ui/core/';
import DrawerContainer from 'containers/CustomDrawerContainer/DrawerContainer';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
import AnimeStatisticsGraphContainer from 'containers/AnimeStatisticsGraph/AnimeStatisticsGraphContainer';
const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
    },
  },
  rightGridStyle: {
    marginLeft: '-30px',
  },
  noGridStyle: {},
  detailsBack: {
    background: theme.palette.background.default,
    width: '100vw',
    height: '100vh',
  },
}));

const AnimeWatchlistStatsView = (props) => {
  const classes = useStyles();
  const { isMobile } = useResizeScreen();
  return (
    <>
      <Grid container spacing={0} className={classes.detailsBack}>
        <Grid item xs={isMobile ? null : 1}>
          <DrawerContainer />
        </Grid>
        <Grid
          item
          xs={isMobile ? 12 : 11}
          className={isMobile ? classes.noGridStyle : classes.rightGridStyle}
        >
          <AnimeStatisticsGraphContainer />
        </Grid>
      </Grid>
    </>
  );
};

export default AnimeWatchlistStatsView;
