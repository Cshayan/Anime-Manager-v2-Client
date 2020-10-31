/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid } from '@material-ui/core';
import cls from 'classnames';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    background: theme.card.background,
    border: `1px solid ${theme.palette.primary.main}`,
  },
  boxContainer: {
    margin: '0 auto',
  },
  box: {
    padding: '5px 40px',
    borderRadius: '5px',
    background: theme.palette.background.default,
    border: `1px solid ${theme.palette.primary.main}`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    margin: theme.typography.pxToRem(10),
    boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    cursor: 'pointer',
  },
  totalText: {
    color: theme.palette.text.primary,
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
  activeFilter: {
    background: theme.button.background.light,
    color: '#fff',
  },
  '@media screen and (max-width:600px)': {},
}));

const AnimeBoxStats = (props) => {
  const {
    total,
    watching,
    unwatched,
    completed,
    hold,
    dropped,
    selectedFilter,
    handleFilterButtonClick,
  } = props;
  const classes = useStyles();
  return (
    <div className={classes.boxContainer}>
      <Grid container alignItems="center" justify="space-between">
        <Grid item xs={4} lg={2} md={2}>
          <div
            className={cls(classes.box, {
              [classes.activeFilter]: selectedFilter === 'Total',
            })}
            onClick={() => handleFilterButtonClick('Total')}
          >
            <Typography className={cls(classes.title, classes.totalText)}>
              Total
            </Typography>
            <Typography className={cls(classes.value, classes.totalText)}>
              {total}
            </Typography>
          </div>
        </Grid>
        <Grid item xs={4} lg={2} md={2}>
          <div
            className={cls(classes.box, classes.watching, {
              [classes.activeFilter]: selectedFilter === 'Watching',
            })}
            onClick={() => handleFilterButtonClick('Watching')}
          >
            <Typography className={classes.title}>Watching</Typography>
            <Typography className={classes.value}>{watching}</Typography>
          </div>
        </Grid>
        <Grid item xs={4} lg={2} md={2}>
          <div
            className={cls(classes.box, classes.unwatched, {
              [classes.activeFilter]: selectedFilter === 'Unwatched',
            })}
            onClick={() => handleFilterButtonClick('Unwatched')}
          >
            <Typography className={classes.title}>Unwatched</Typography>
            <Typography className={classes.value}>{unwatched}</Typography>
          </div>
        </Grid>
        <Grid item xs={4} lg={2} md={2}>
          <div
            className={cls(classes.box, classes.completed, {
              [classes.activeFilter]: selectedFilter === 'Completed',
            })}
            onClick={() => handleFilterButtonClick('Completed')}
          >
            <Typography className={classes.title}>Completed</Typography>
            <Typography className={classes.value}>{completed}</Typography>
          </div>
        </Grid>
        <Grid item xs={4} lg={2} md={2}>
          <div
            className={cls(classes.box, classes.hold, {
              [classes.activeFilter]: selectedFilter === 'On Hold',
            })}
            onClick={() => handleFilterButtonClick('On Hold')}
          >
            <Typography className={classes.title}>OnHold</Typography>
            <Typography className={classes.value}>{hold}</Typography>
          </div>
        </Grid>
        <Grid item xs={4} lg={2} md={2}>
          <div
            className={cls(classes.box, classes.dropped, {
              [classes.activeFilter]: selectedFilter === 'Dropped',
            })}
            onClick={() => handleFilterButtonClick('Dropped')}
          >
            <Typography className={classes.title}>Dropped</Typography>
            <Typography className={classes.value}>{dropped}</Typography>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

AnimeBoxStats.propTypes = {
  total: PropTypes.number,
  watching: PropTypes.number,
  unwatched: PropTypes.number,
  completed: PropTypes.number,
  hold: PropTypes.number,
  dropped: PropTypes.number,
  selectedFilter: PropTypes.string,
  handleFilterButtonClick: PropTypes.func,
};

AnimeBoxStats.defaultProps = {
  total: 0,
  watching: 0,
  unwatched: 0,
  completed: 0,
  hold: 0,
  dropped: 0,
  selectedFilter: 'Watching',
  handleFilterButtonClick: () => {},
};

export default AnimeBoxStats;
