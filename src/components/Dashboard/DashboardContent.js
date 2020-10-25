import React from 'react';
import { Grid } from '@material-ui/core';
import AnimeWatchlistContainer from '../../containers/AnimeWatchlistContainer/AnimeWatchlistContainer';
import AnimeWatchlistStatsContainer from '../../containers/AnimeWatchlistStatisticsContainer/AnimeWatchlistStatsContainer';

const DashboardContent = () => (
  <Grid container>
    <Grid item lg={9} md={9} sm={12}>
      <AnimeWatchlistContainer />
    </Grid>
    <Grid item lg={3} md={3} sm={12}>
      <AnimeWatchlistStatsContainer />
    </Grid>
  </Grid>
);

export default DashboardContent;
