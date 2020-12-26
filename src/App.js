import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SnackBar from 'components/utilityComponents/UniversalSnackbar';
import ThemeDialog from 'components/utilityComponents/ThemeDialog';
import LogoutDialog from 'components/utilityComponents/LogoutDialog';
import { useDarkMode } from './custom-hooks/darkModeHook';
import theme, { darkTheme } from './utils/theme';
import 'react-image-lightbox/style.css';
import {
  HomeView,
  AuthView,
  VerifyAccountView,
  Dashboard,
  AnimeDetailsView,
  AnimeWatchlistStatsView,
  PageNotFoundView,
} from './views';
import './App.css';

const App = () => {
  const { isDarkModeEnabled } = useDarkMode();

  return (
    <MuiThemeProvider theme={isDarkModeEnabled ? darkTheme : theme}>
      <SnackBar />
      <ThemeDialog />
      <LogoutDialog />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/auth" component={AuthView} />
          <Route exact path="/verify-account" component={VerifyAccountView} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/anime/:mal_id" component={AnimeDetailsView} />
          <Route exact path="/statistics" component={AnimeWatchlistStatsView} />
          <Route component={PageNotFoundView} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default memo(App);
