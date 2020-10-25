import React from 'react';
import AnimeDetailDialogContainer from 'containers/AnimeDetailDialogContainer/AnimeDetailDialogContainer';
import Header from '../Header/Header';
import DashboardContent from './DashboardContent';
import DrawerContainer from '../../containers/CustomDrawerContainer/DrawerContainer';
import ThemeDialog from '../utilityComponents/ThemeDialog';
import LogoutDialog from '../utilityComponents/LogoutDialog';
import AnimeDeleteDialog from '../utilityComponents/DeleteAnimeDialog';

const DashboardComponent = () => (
  <>
    <DrawerContainer />
    <Header isSearchBarRequired isAvatarPopUpRequired />
    <DashboardContent />
    <ThemeDialog />
    <LogoutDialog />
    <AnimeDeleteDialog />
    <AnimeDetailDialogContainer />
  </>
);

export default DashboardComponent;
