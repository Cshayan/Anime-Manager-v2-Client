import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MuiThemeProvider } from '@material-ui/core/styles';
import SnackBar from 'components/utilityComponents/UniversalSnackbar';
import ThemeDialog from 'components/utilityComponents/ThemeDialog';
import LogoutDialog from 'components/utilityComponents/LogoutDialog';
import BackDrop from 'components/utilityComponents/BackDrop';
import { useDarkMode } from './custom-hooks/darkModeHook';
import theme, { darkTheme } from './utils/theme';
import 'react-image-lightbox/style.css';
import {
  HomeView,
  AuthView,
  VerifyAccountView,
  ForgotPasswordView,
  ResetPasswordView,
  Dashboard,
  AnimeDetailsView,
  AnimeWatchlistStatsView,
  PageNotFoundView,
  UserProfileView,
  ViewMyWatchlist,
  TopAnimesView,
} from './views';
import './App.css';

const queryClient = new QueryClient();

const App = () => {
  const { isDarkModeEnabled } = useDarkMode();

  return (
    <QueryClientProvider client={queryClient}>
      <MuiThemeProvider theme={isDarkModeEnabled ? darkTheme : theme}>
        <SnackBar />
        <BackDrop />
        <ThemeDialog />
        <LogoutDialog />
        <Router>
          <Switch>
            <Route exact path="/" component={HomeView} />
            <Route exact path="/auth" component={AuthView} />
            <Route exact path="/verify-account" component={VerifyAccountView} />
            <Route
              exact
              path="/forgot-password"
              component={ForgotPasswordView}
            />
            <Route exact path="/reset-password" component={ResetPasswordView} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/anime/:mal_id" component={AnimeDetailsView} />
            <Route
              exact
              path="/statistics"
              component={AnimeWatchlistStatsView}
            />
            <Route exact path="/profile" component={UserProfileView} />
            <Route
              exact
              path="/view-my-watchlist"
              component={ViewMyWatchlist}
            />
            <Route exact path="/top-anime-landing" component={TopAnimesView} />
            <Route component={PageNotFoundView} />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </QueryClientProvider>
  );
};

export default memo(App);
