import React from 'react';
import { makeStyles } from '@material-ui/core';
import { useInfiniteTopAnimes } from 'containers/home/top-animes/hooks';
import AnimeCard from 'containers/home/top-animes/anime-card';
import images from './images';

const useStyles = makeStyles((theme) => ({
  homeBack: {
    background: theme.palette.background.default,
    width: '100vw',
    height: '100%',
  },
  bannerImg: {
    width: '100%',
    height: theme.typography.pxToRem(500),
    backgroundSize: 'contain',
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '0 0 50px 50px',
  },
  bannerHeading: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: theme.typography.pxToRem(56),
    color: '#fff',
    textAlign: 'center',
  },
  subHeading: {
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    fontSize: theme.typography.pxToRem(36),
    color: '#fff',
    textAlign: 'center',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gridGap: '1rem',
    padding: '40px 0 0 20px',
  },
  loadMoreBtn: {
    background: theme.button.delete.background,
    fontSize: theme.typography.pxToRem(18),
    margin: '1rem',
    border: 'none',
    outline: 'none',
    padding: '0.5rem 0.7rem',
    color: '#fff',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': {
      opacity: '0.8',
    },
    '&:disabled': {
      background: theme.button.delete.background,
      cursor: 'no-drop',
    },
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  '@media screen and (max-width: 600px)': {
    cardContainer: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      alignContent: 'center',
      justifyContent: 'center',
    },
    bannerHeading: {
      fontSize: theme.typography.pxToRem(36),
    },
    subHeading: {
      transform: 'translate(-50%, -50%)',
      fontSize: theme.typography.pxToRem(16),
    },
  },
}));

const TopAnimesLanding = () => {
  const classes = useStyles();

  const {
    topAnimes,
    fetchNextPage,
    currentpage,
    setCurrentPage,
    isFetchingNextPage,
  } = useInfiniteTopAnimes();

  return (
    <div>
      <div className={classes.bannerImg}>
        <img
          src={images.topAnimesBanner}
          alt="banner"
          style={{ width: '100%', height: '100%' }}
        />
        <h1 className={classes.bannerHeading}>Top Animes airing now</h1>
        <h2 className={classes.subHeading}>
          See the list of top animes airing now and add it to your watchlist
        </h2>
      </div>
      <div className={classes.cardContainer}>
        {topAnimes?.map((group) => (
          <>
            {group?.data?.topAnimes?.map((ele) => (
              <AnimeCard key={ele.mal_id} {...ele} />
            ))}
          </>
        ))}
      </div>
      <div className={classes.btnContainer}>
        <button
          className={classes.loadMoreBtn}
          onClick={() => {
            fetchNextPage({ pageParam: currentpage + 1 });
            setCurrentPage(currentpage + 1);
          }}
        >
          {isFetchingNextPage ? (
            <i
              className="fa fa-spinner fa-spin"
              style={{ color: '#fff', fontSize: '20px' }}
            ></i>
          ) : (
            'Load more'
          )}
        </button>
      </div>
    </div>
  );
};

export default TopAnimesLanding;
