import React from 'react';
import { makeStyles } from '@material-ui/core/';
import DashboardContainer from '../../containers/Dashboard/DashboardContainer';

const useStyles = makeStyles((theme) => ({
  dashboardBack: {
    background: theme.palette.background.default,
    width: '100vw',
    height: '100vh',
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.dashboardBack}>
      <DashboardContainer />
    </div>
  );
};

export default Dashboard;
