import React, { memo } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { useDarkMode } from './custom-hooks/darkModeHook';
import theme, { darkTheme } from './utils/theme';
import { HomeView, AuthView, Dashboard } from './views';
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
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
};

export default memo(App);
