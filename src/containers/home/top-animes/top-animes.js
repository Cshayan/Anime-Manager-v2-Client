import React from 'react';
import { makeStyles, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AnimeCard from './anime-card';
import { useTopAnimes } from './hooks';

const useStyles = makeStyles((theme) => ({
  topAnimeContainer: {
    padding: '2rem',
  },
  headerText: {
    color: theme.palette.text.primary,
    marginBottom: '0.8rem',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '1rem',
  },
  viewAllIconBtn: {
    padding: '0',
    background: 'transparent',
    border: 'none',
    outline: 'none',
    cursor: 'pointer',
    color: theme.palette.primary.main,
    fontSize: theme.typography.pxToRem(28),
    fontWeight: 'bold',
  },
  addIcon: {
    width: theme.typography.pxToRem(30),
    height: theme.typography.pxToRem(30),
  },
  viewAllContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.typography.pxToRem(15),
  },
  viewAllButton: {
    fontSize: theme.typography.pxToRem(26),
    background: theme.palette.primary.main,
    color: '#fff',
  },
  viewAllLink: {
    textDecoration: 'none',
  },
  '@media screen and (max-width: 600px)': {
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      alignContent: 'center',
      justifyContent: 'center',
    },
    headerText: {
      fontSize: theme.typography.pxToRem(22),
    },
    viewAllButton: {
      fontSize: theme.typography.pxToRem(16),
      background: theme.palette.primary.main,
      color: theme.palette.text.primary,
    },
  },
}));

const TopAnimes = () => {
  const classes = useStyles();
  const { topAnimes } = useTopAnimes();
  return (
    <div className={classes.topAnimeContainer}>
      <div className={classes.viewAllContainer}>
        <h1 className={classes.headerText}>Top animes of all time</h1>
        <Link to="/top-anime-landing" className={classes.viewAllLink}>
          <Button className={classes.viewAllButton}>View all</Button>
        </Link>
      </div>
      <div className={classes.cardContainer}>
        {topAnimes?.map((ele) => (
          <AnimeCard key={ele.mal_id} {...ele} />
        ))}
      </div>
    </div>
  );
};

export default TopAnimes;
