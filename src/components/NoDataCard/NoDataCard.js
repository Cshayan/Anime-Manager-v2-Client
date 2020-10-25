import React from 'react';
import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';

const useStyles = makeStyles((theme) => ({
  statsContainer: {
    padding: '1rem',
  },
  card: {
    height: 300,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    background: theme.card.background,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  icon: {
    width: 30,
    height: 30,
    color: theme.palette.primary.main,
  },
  noDataText: {
    color: theme.palette.text.primary,
    fontSize: theme.typography.pxToRem(18),
    letterSpacing: '0.1rem',
    fontWeight: '600',
  },
  '@media screen and (max-width:600px)': {
    card: {
      height: 200,
    },
  },
}));

const NoDataCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <InfoIcon className={classes.icon} />
        <Typography className={classes.noDataText}>
          Nothing to display. Add animes to your watchlist first.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NoDataCard;
