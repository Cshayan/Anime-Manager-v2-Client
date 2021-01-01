import React from 'react';
import { Redirect } from 'react-router-dom';
import { makeStyles, Typography } from '@material-ui/core';
import Header from 'components/Header/Header';
import ProfileImage from 'components/UserProfile/ProfileImage';
import { useAuthentication, useUserProfile } from 'custom-hooks/authHook';

const useStyles = makeStyles((theme) => ({
  '@media screen and (max-width: 600px)': {},
}));

const UserProfileContainer = () => {
  const classes = useStyles();
  const { isAuthenticated } = useAuthentication();
  const { userDetails, isUserLoading } = useUserProfile();

  if (!isAuthenticated) {
    return <Redirect to="/auth" />;
  }

  return (
    <>
      <Header isBackButtonRequired />
      {!isUserLoading && <ProfileImage userDetails={userDetails} />}
    </>
  );
};

export default UserProfileContainer;
