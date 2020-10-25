import React from 'react';
import PropTypes from 'prop-types';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  Grid,
} from '@material-ui/core';
import cls from 'classnames';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    background: theme.card.background,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  box: {
    padding: '5px 20px',
    width: theme.typography.pxToRem(120),
    height: theme.typography.pxToRem(120),
    borderRadius: '5px',
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.primary.main}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.typography.pxToRem(10),
  },
  title: {
    fontSize: theme.typography.pxToRem(16),
  },
  value: {
    fontSize: theme.typography.pxToRem(34),
    fontWeight: 700,
    letterSpacing: '0.1rem',
  },
  unwatched: {
    color: '#7f8c8d',
  },
  watching: {
    color: '#2ecc71',
  },
  completed: {
    color: '#2980b9',
  },
  hold: {
    color: '#f1c40f',
  },
  dropped: {
    color: '#e74c3c',
  },
  '@media screen and (max-width:600px)': {},
}));

const AnimeBoxStats = (props) => {
  const { total, watching, unwatched, completed, hold, dropped } = props;
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardContent>
        <Grid container alignContent="center" justify="center">
          <Grid item xs={4} lg={6} md={6}>
            <div className={cls(classes.box)}>
              <Typography className={classes.title}>Total</Typography>
              <Typography className={classes.value}>{total}</Typography>
            </div>
          </Grid>
          <Grid item xs={4} lg={6} md={6}>
            <div className={cls(classes.box, classes.watching)}>
              <Typography className={classes.title}>Watching</Typography>
              <Typography className={classes.value}>{watching}</Typography>
            </div>
          </Grid>
          <Grid item xs={4} lg={6} md={6}>
            <div className={cls(classes.box, classes.unwatched)}>
              <Typography className={classes.title}>Unwatched</Typography>
              <Typography className={classes.value}>{unwatched}</Typography>
            </div>
          </Grid>
          <Grid item xs={4} lg={6} md={6}>
            <div className={cls(classes.box, classes.completed)}>
              <Typography className={classes.title}>Completed</Typography>
              <Typography className={classes.value}>{completed}</Typography>
            </div>
          </Grid>
          <Grid item xs={4} lg={6} md={6}>
            <div className={cls(classes.box, classes.hold)}>
              <Typography className={classes.title}>On Hold</Typography>
              <Typography className={classes.value}>{hold}</Typography>
            </div>
          </Grid>
          <Grid item xs={4} lg={6} md={6}>
            <div className={cls(classes.box, classes.dropped)}>
              <Typography className={classes.title}>Dropped</Typography>
              <Typography className={classes.value}>{dropped}</Typography>
            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

AnimeBoxStats.propTypes = {
  total: PropTypes.number,
  watching: PropTypes.number,
  unwatched: PropTypes.number,
  completed: PropTypes.number,
  hold: PropTypes.number,
  dropped: PropTypes.number,
};

AnimeBoxStats.defaultProps = {
  total: 0,
  watching: 0,
  unwatched: 0,
  completed: 0,
  hold: 0,
  dropped: 0,
};

export default AnimeBoxStats;
