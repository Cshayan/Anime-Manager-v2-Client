import React from 'react';
import { Redirect } from 'react-router-dom';
import DashboardComponent from 'components/Dashboard/DashboardComponent';
import { useGetMe, useAuthentication } from '../../custom-hooks/authHook';
import ContainerWrapper from '../../wrapper/ContainerWrapper';
import { useGetAnimeWatchlist } from '../../custom-hooks/animeHook';

const DashboardContainer = () => {
  const { isUserLoading } = useGetMe();
  const { isAuthenticated } = useAuthentication();
  useGetAnimeWatchlist();

  if (!isAuthenticated) {
    return <Redirect to="/auth" />;
  }

  return (
    <>
      <ContainerWrapper
        isLoading={isUserLoading}
      >
        <DashboardComponent />
      </ContainerWrapper>
    </>
  );
};

export default DashboardContainer;
