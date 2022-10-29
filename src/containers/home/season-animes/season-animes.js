import React from 'react';
import { makeStyles } from '@material-ui/core';
// import viewAllAnimation from 'assets/animation/view-all-animation.json';
// import Lottie from 'react-lottie';
import AnimeCard from './anime-card';
import { useSeasonAnimes } from './hooks';

// const viewAllOptions = {
//   loop: true,
//   autoplay: true,
//   animationData: viewAllAnimation,
//   rendererSettings: {
//     preserveAspectRatio: 'xMidYMid slice',
//   },
// };

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
  '@media screen and (max-width: 600px)': {
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '1rem',
      margin: '0 auto',
    },
    headerText: {
      fontSize: theme.typography.pxToRem(26),
    },
  },
}));

const TopAnimes = () => {
  const classes = useStyles();
  const { seasonAnimes } = useSeasonAnimes();
  return (
    <div className={classes.topAnimeContainer}>
      <h1 className={classes.headerText}>Currently airing now</h1>
      <div className={classes.cardContainer}>
        {seasonAnimes?.map((ele) => (
          <AnimeCard key={ele.mal_id} {...ele} />
        ))}
        {/* <button className={classes.viewAllIconBtn}>
          <Lottie options={viewAllOptions} width="30%" height="30%" />
          <p>View all</p>
        </button> */}
      </div>
    </div>
  );
};

export default TopAnimes;
