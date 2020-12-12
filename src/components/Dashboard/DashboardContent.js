import React from 'react';
import { Grid } from '@material-ui/core';
import AnimeWatchlistContainer from '../../containers/AnimeWatchlistContainer/AnimeWatchlistContainer';
import AnimeWatchlistStatsContainer from '../../containers/AnimeWatchlistStatisticsContainer/AnimeWatchlistStatsContainer';

const DashboardContent = () => (
  <Grid container>
    <Grid item lg={12} md={12} sm={12}>
      <AnimeWatchlistStatsContainer />
    </Grid>
    <Grid item lg={12} md={12} sm={12}>
      <AnimeWatchlistContainer />
    </Grid>
  </Grid>
);

export default DashboardContent;
