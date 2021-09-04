import React from 'react';
import { makeStyles } from '@material-ui/core';
import Logo from 'components/utilityComponents/Logo';
import TopAnimesLanding from 'containers/top-animes-landing';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: theme.palette.primary.main,
      outline: '1px solid slategrey',
    },
  },
  homeBack: {
    background: theme.palette.background.default,
    width: '100vw',
    height: '100%',
  },
}));

const TopAnimesView = () => {
  const classes = useStyles();
  return (
    <div className={classes.homeBack}>
      <TopAnimesLanding />
    </div>
  );
};

export default TopAnimesView;
