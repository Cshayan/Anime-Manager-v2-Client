/* Custom Hooks for authentication */
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'query-string';
import {
  loginAPIStart,
  getMeAPIStart,
  registerAPIStart,
  logOutUserSuccess,
  verifyAccountAPIStart,
} from '../actions/authAction';
import { resetAll } from '../actions/resetAction';
import { openLogoutDialog, closeLogoutDialog } from '../actions/dialogAction';
import { drawerClose } from '../actions/drawerAction';

const selectLogoutDialog = (state) => state.dialog.isLogoutDialogOpen;
const selectIsUserLogging = ({ auth: { isUserLogging = false } }) =>
  isUserLogging;
const selectIsUserVerifying = ({ auth: { isUserVerifying = false } }) =>
  isUserVerifying;
const selectIsUserVerified = ({ auth: { isUserVerified = false } }) =>
  isUserVerified;

export const useAuthentication = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const hasUserRegistered = useSelector(
    (state) => state.auth.hasUserRegistered,
  );

  return {
    isAuthenticated,
    hasUserRegistered,
  };
};

export const useLogin = () => {
  const dispatch = useDispatch();
  const isUserLogging = useSelector(selectIsUserLogging);

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const onLoginSubmit = (e) => {
    e.preventDefault();
    dispatch(loginAPIStart(loginDetails));
  };

  return {
    email: loginDetails.email,
    password: loginDetails.password,
    onChangeHandler,
    onLoginSubmit,
    isUserLogging,
  };
};

export const useRegister = () => {
  const dispatch = useDispatch();
  const isUserLogging = useSelector(selectIsUserLogging);

  const [registerDetails, setLoginDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setLoginDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    dispatch(registerAPIStart(registerDetails));
  };

  return {
    name: registerDetails.name,
    email: registerDetails.email,
    password: registerDetails.password,
    onChangeHandler,
    onRegisterSubmit,
    isUserLogging,
  };
};

export const useGetMe = () => {
  const dispatch = useDispatch();
  const isUserLoading = useSelector((state) => state.auth.isUserLoading);
  const userDetails = useSelector((state) => state.auth.user);

  const getCurrentUser = useCallback(() => {
    dispatch(getMeAPIStart());
  }, [dispatch]);

  return {
    isUserLoading,
    getCurrentUser,
    userDetails,
  };
};

export const useVerifyAccount = (props) => {
  const { email = '', token = '' } = qs.parse(props.location.search);
  const isUserVerifying = useSelector(selectIsUserVerifying);
  const isUserVerified = useSelector(selectIsUserVerified);
  const dispatch = useDispatch();

  useEffect(() => {
    if (email && token) {
      dispatch(verifyAccountAPIStart({ email, token }));
    }
  }, [email, token]);

  console.log({ isUserVerifying, isUserVerified });

  return {
    isUserVerifying,
    isUserVerified,
  };
};

export const useLogOut = () => {
  const dispatch = useDispatch();
  const isLogoutDialogOpen = useSelector(selectLogoutDialog);

  const logOutUser = () => {
    dispatch(logOutUserSuccess());
    dispatch(resetAll());
  };

  const handleLogoutButtonClick = () => {
    dispatch(drawerClose());
    if (isLogoutDialogOpen) {
      dispatch(closeLogoutDialog());
    } else {
      dispatch(openLogoutDialog());
    }
  };

  return {
    logOutUser,
    handleLogoutButtonClick,
  };
};
