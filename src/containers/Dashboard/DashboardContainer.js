import React from 'react';
import { Redirect } from 'react-router-dom';
import { useGetMe, useAuthentication } from '../../custom-hooks/authHook';
import ContainerWrapper from '../../wrapper/ContainerWrapper';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';
import { useAnime } from '../../custom-hooks/animeHook';

const DashboardContainer = () => {
  const { isUserLoading, getCurrentUser } = useGetMe();
  const { isAuthenticated } = useAuthentication();
  const { fetchAnimes } = useAnime();

  if (!isAuthenticated) {
    return <Redirect to="/auth" />;
  }

  return (
    <>
      <ContainerWrapper
        isLoading={isUserLoading}
        getCurrentUser={getCurrentUser}
        fetchAnimes={fetchAnimes}
      >
        <DashboardComponent />
      </ContainerWrapper>
    </>
  );
};

export default DashboardContainer;
