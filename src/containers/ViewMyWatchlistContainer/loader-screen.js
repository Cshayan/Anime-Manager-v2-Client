import React from 'react';
import { makeStyles } from '@material-ui/core/';
import Skeleton from 'react-skeleton-loader';
import { useDarkMode } from 'custom-hooks/darkModeHook';

const useStyles = makeStyles(() => ({
  loaderContainer: {
    padding: '1rem',
  },
  topContainer: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 2fr',
  },
  watchlistContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px',
    padding: '0 1rem',
  },
  '@media screen and (max-width: 600px)': {
    topContainer: {
      gridTemplateColumns: '1fr',
    },
    watchlistContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));

const LoaderScreen = () => {
  const classes = useStyles();
  const { isDarkModeEnabled } = useDarkMode();
  return (
    <div className={classes.loaderContainer}>
      <div className={classes.topContainer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Skeleton
            width="160px"
            height="150px"
            borderRadius="50%"
            color={isDarkModeEnabled ? '#15202B' : '#c7ecee	'}
          />
          <Skeleton
            width="200px"
            height="20px"
            borderRadius="5px"
            color={isDarkModeEnabled ? '#15202B' : '#c7ecee	'}
          />
          <Skeleton
            width="230px"
            height="20px"
            borderRadius="5px"
            color={isDarkModeEnabled ? '#15202B' : '#c7ecee	'}
          />
        </div>
        <div className={classes.watchlistContainer}>
          <Skeleton
            width="430px"
            height="100px"
            borderRadius="5px"
            color={isDarkModeEnabled ? '#15202B' : '#c7ecee'}
          />
          <Skeleton
            width="430px"
            height="100px"
            borderRadius="5px"
            color={isDarkModeEnabled ? '#15202B' : '#c7ecee'}
          />
        </div>
      </div>
    </div>
  );
};

export default LoaderScreen;
