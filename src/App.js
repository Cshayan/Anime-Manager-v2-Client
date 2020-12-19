import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useDarkMode } from './custom-hooks/darkModeHook';
import theme, { darkTheme } from './utils/theme';
import 'react-image-lightbox/style.css';
import {
  HomeView,
  AuthView,
  VerifyAccountView,
  Dashboard,
  AnimeDetailsView,
} from './views';
import SnackBar from './components/utilityComponents/UniversalSnackbar';
import './App.css';

const App = () => {
  const { isDarkModeEnabled } = useDarkMode();

  return (
    <MuiThemeProvider theme={isDarkModeEnabled ? darkTheme : theme}>
      <SnackBar />
      <Router>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route exact path="/auth" component={AuthView} />
          <Route exact path="/verify-account" component={VerifyAccountView} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/anime/:mal_id" component={AnimeDetailsView} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default memo(App);
