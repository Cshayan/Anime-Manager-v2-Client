import React from 'react';
import { makeStyles, Typography, Avatar } from '@material-ui/core/';
import { useAuthentication } from 'custom-hooks/authHook';
import ProfileImage from 'components/UserProfile/ProfileImage';
import AnimeCard from 'components/AnimeCard/AnimeCard';
import Lottie from 'react-lottie';
import noUserErrorAnimation from 'assets/animation/no-user-error.json';
import { useGetSpecificUser } from './hooks';
import Header from './header';
import LoaderScreen from './loader-screen';

const useStyles = makeStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  topContainer: {
    display: 'grid',
    gridTemplateColumns: '0.8fr 2fr',
  },
  errorText: {
    fontSize: '22px',
    color: theme.palette.text.primary,
    textAlign: 'center',
  },
  watchlistContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gridGap: '10px',
    padding: '0 1rem',
  },
  topHeader: {
    zIndex: '200',
    position: 'fixed',
    top: '0',
    transition: 'opacity .1s ease',
    background: theme.card.background,
    padding: '1rem',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },
  nameText: {
    color: theme.palette.text.primary,
    marginLeft: '10px',
    fontSize: '18px',
  },
  '@media screen and (max-width: 600px)': {
    topContainer: {
      gridTemplateColumns: '1fr',
    },
    watchlistContainer: {
      gridTemplateColumns: '1fr',
    },
  },
}));

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: noUserErrorAnimation,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

const ViewMyWatchlist = (props) => {
  const classes = useStyles();
  const { isAuthenticated } = useAuthentication();
  const {
    user,
    isUserDataLoading,
    isError,
    watchlist,
    scrollElement,
    isWatchlistLoading,
  } = useGetSpecificUser(props);

  // for loading screen
  if (isUserDataLoading || isWatchlistLoading) {
    return (
      <div style={{ height: '100vh' }}>
        <Header isAuthenticated={isAuthenticated} />
        <LoaderScreen />
      </div>
    );
  }

  // for error screen
  if (isError) {
    return (
      <div style={{ height: '100vh' }}>
        <Header isAuthenticated={isAuthenticated} />
        <Lottie options={defaultOptions} width="50%" height="50%" />
        <Typography className={classes.errorText}>
          Something went wrong! Please try again by reloading the page.
        </Typography>
      </div>
    );
  }

  return (
    <div>
      <Header isAuthenticated={isAuthenticated} />
      <div
        className={classes.topHeader}
        style={{
          display: scrollElement.visible ? 'inline-flex' : 'none',
        }}
      >
        <Avatar alt="avatar" src={user?.profilePicUrl} />
        <Typography className={classes.nameText}>{user?.name}</Typography>
      </div>
      <div className={classes.topContainer}>
        {!isUserDataLoading && (
          <ProfileImage
            isUploadRequired={false}
            profilePicUrl={user?.profilePicUrl}
            name={user?.name}
            email={user?.email}
          />
        )}
        <div className={classes.watchlistContainer}>
          {watchlist?.map((list) => (
            <AnimeCard
              key={list?._id}
              id={list?.malId}
              title={list?.animeData?.title}
              url={list?.animeData?.url}
              imageUrl={list?.animeData?.imageUrl}
              type={list?.animeData?.type}
              episodes={list?.animeData?.episodes}
              score={list?.animeData?.score}
              startDate={list?.animeData?.startDate}
              endDate={list?.animeData?.endDate}
              ongoing={list?.animeData?.ongoing}
              rated={list?.animeData?.rated}
              isAddButtonRequired={false}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewMyWatchlist;
