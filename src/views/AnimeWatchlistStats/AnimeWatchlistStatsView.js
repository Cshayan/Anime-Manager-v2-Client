import React from 'react';
import { makeStyles, Grid } from '@material-ui/core/';
import DrawerContainer from 'containers/CustomDrawerContainer/DrawerContainer';
import { useResizeScreen } from 'custom-hooks/useResizeHook';
import AnimeStatisticsGraphContainer from 'containers/AnimeStatisticsGraph/AnimeStatisticsGraphContainer';
const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0',
      height: '0',
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
    // overflow: 'hidden',
  },
}));

const AnimeWatchlistStatsView = (props) => {
  const classes = useStyles();
  const { isMobile } = useResizeScreen();
  return (
    <div className={classes.detailsBack}>
      <Grid container spacing={0}>
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
    </div>
  );
};

export default AnimeWatchlistStatsView;
