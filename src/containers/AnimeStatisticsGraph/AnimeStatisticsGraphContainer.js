import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from 'components/Header/Header';
import { useAuthentication } from 'custom-hooks/authHook';

const AnimeStatisticsGraphContainer = () => {
  const { isAuthenticated } = useAuthentication();

  if (!isAuthenticated) {
    return <Redirect to="/auth" />;
  }
  return (
    <>
      <Header
        isBackButtonRequired
        isAvatarPopUpRequired
        iconText="View Statistics"
      />
    </>
  );
};

export default AnimeStatisticsGraphContainer;
