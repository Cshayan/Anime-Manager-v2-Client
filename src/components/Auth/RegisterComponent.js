import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Grid, Button } from '@material-ui/core';
import RegisterForm from './RegisterForm';
import TypeWritter from '../utilityComponents/TypeWritterComponent';

const useStyles = makeStyles((theme) => ({
  card: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
    background: theme.card.background,
  },
  cardContent: {
    padding: 0,
    margin: 0,
    height: '100%',
  },
  cardRight: {
    height: '100%',
    background: 'linear-gradient(to right, #2193b0, #6dd5ed)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    padding: '1rem',
  },
  welcomeText: {
    fontSize: '2rem',
    fontWeight: 'bold',
    color: '#fff',
  },
  cardLeft: {
    display: 'flex',
    flexDirection: 'column',
    padding: '2rem',
    width: '100%',
    color: '#fff',
  },
  noAccount: {
    margin: theme.typography.pxToRem(10),
    fontSize: theme.typography.pxToRem(20),
    color: '#fff',
  },
  signUp: {
    background: theme.palette.primary.dark,
    padding: `${theme.typography.pxToRem(7)} ${theme.typography.pxToRem(25)}`,
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(18),
    margin: `1rem 0`,
    '&:hover': {
      border: `1px solid ${theme.palette.primary.dark}`,
    },
  },
  register: {
    color: theme.palette.text.primary,
  },
  '@media screen and (max-width: 600px)': {
    marginTop: 0,
    width: '90%',
    welcomeText: {
      fontSize: '1rem',
    },
  },
}));

const RegisterComponent = (props) => {
  const classes = useStyles();
  const { onRightButtonClick } = props;
  return (
    <div className={classes.card}>
      <Grid container direction="row-reverse">
        <Grid item xs={12} md={12} lg={8} className={classes.cardLeft}>
          <Typography variant="h4" className={classes.register}>
            Sign Up
          </Typography>
          <RegisterForm />
        </Grid>
        <Grid item xs={12} md={12} lg={4}>
          <div className={classes.cardRight}>
            <div className={classes.welcomeText}>
              <TypeWritter
                words={['Welcome Guest!', 'Create a new account.']}
              />
            </div>
            <Typography className={classes.noAccount}>
              Already have an account? Click below.
            </Typography>
            <Button
              className={classes.signUp}
              onClick={() => onRightButtonClick(true)}
            >
              Login
            </Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

RegisterComponent.propTypes = {
  onRightButtonClick: PropTypes.func,
};

RegisterComponent.defaultProps = {
  onRightButtonClick: () => {},
};

export default RegisterComponent;
