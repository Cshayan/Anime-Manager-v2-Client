/* Custom Hooks for authentication */
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  loginAPIStart,
  getMeAPIStart,
  registerAPIStart,
  logOutUserSuccess,
} from "../actions/authAction";
import { resetAll } from "../actions/resetAction";
import { openLogoutDialog, closeLogoutDialog } from "../actions/dialogAction";
import { drawerClose } from "../actions/drawerAction";

const selectLogoutDialog = (state) => state.dialog.isLogoutDialogOpen;

export const useAuthentication = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return {
    isAuthenticated,
  };
};

export const useLogin = () => {
  const dispatch = useDispatch();

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
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
  };
};

export const useRegister = () => {
  const dispatch = useDispatch();

  const [registerDetails, setLoginDetails] = useState({
    name: "",
    email: "",
    password: "",
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
