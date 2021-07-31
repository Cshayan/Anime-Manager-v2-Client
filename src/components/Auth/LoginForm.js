import React, { useState } from 'react';
import { IconButton, makeStyles, TextField } from '@material-ui/core';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Link } from 'react-router-dom';
import { useLogin } from '../../custom-hooks/authHook';

const useStyles = makeStyles((theme) => ({
  formInput: {
    margin: `1rem 0`,
  },
  input: {
    '&::placeholder': {
      fontSize: theme.typography.pxToRem(18),
      color: '#fff',
    },
    fontSize: theme.typography.pxToRem(20),
    color: '#fff',
  },
  loginButton: {
    background: theme.button.background.light,
    padding: `${theme.typography.pxToRem(9)} ${theme.typography.pxToRem(25)}`,
    border: `1px solid ${theme.palette.primary.main}`,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: theme.typography.pxToRem(18),
    margin: `1rem 0`,
    borderRadius: theme.typography.pxToRem(5),
    outline: 'none',
    cursor: 'pointer',
    '&:hover': {
      border: `1px solid ${theme.button.background.light}`,
    },
    '&:disabled': {
      background: theme.button.background.light,
      border: `1px solid ${theme.palette.primary.main}`,
      cursor: 'no-drop',
      opacity: '0.5',
      overflow: 'hidden',
    },
  },
  passwordTextInputContainer: {
    display: 'flex', flexDirection: 'row', alignItems: 'center'
  },
  btnCont: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  forgotPassText: {
    fontSize: theme.typography.pxToRem(16),
    letterSpacing: '0.1rem',
    color: theme.card.text,
  },
  eyeIcon: {
     width: 40,
     height: 40,
     color: theme.palette.primary.main
  }
}));

const LoginForm = () => {
  const classes = useStyles();
  const { email, password, onChangeHandler, onLoginSubmit, isUserLogging } =
    useLogin();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <form noValidate autoComplete="off" onSubmit={(e) => onLoginSubmit(e)}>
      <TextField
        placeholder="Your email"
        id="standard-basic"
        required
        name="email"
        type="email"
        value={email}
        onChange={onChangeHandler}
        className={classes.formInput}
        fullWidth
        InputProps={{
          classes: {
            input: classes.input,
          },
        }}
      />
      <div className={classes.passwordTextInputContainer}>
        <TextField
          type={showPassword ? 'text' : 'password'}
          name="password"
          placeholder="Your password"
          value={password}
          onChange={onChangeHandler}
          className={classes.formInput}
          fullWidth
          InputProps={{
          classes: { input: classes.input },
        }}
        />
        <IconButton className={classes.eyeIcon} onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? <Visibility /> : <VisibilityOff />}
        </IconButton>
      </div>
      <div className={classes.btnCont}>
        <button
          className={classes.loginButton}
          type="submit"
          disabled={isUserLogging}
        >
          {isUserLogging ? (
            <i
              className="fa fa-spinner fa-spin"
              style={{ color: '#fff', fontSize: '20px', overflow: 'hidden' }}
            ></i>
          ) : (
            'LOGIN'
          )}
        </button>
        <Link to="/forgot-password" className={classes.forgotPassText}>
          Forgot password?
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
