/* Custom Hooks for authentication */
import { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'query-string';
import { isEmpty } from 'lodash';
import { useHistory } from 'react-router-dom';
import { snackBarOpen } from 'actions/snackbarAction';
import {
  loginAPIStart,
  getMeAPIStart,
  registerAPIStart,
  logOutUserSuccess,
  verifyAccountAPIStart,
  forgotPasswordStart,
  resetPasswordStart,
  uploadProfilePicStart,
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
const selectIsForgotAPIOn = ({ auth: { isForgotAPIOn = false } }) =>
  isForgotAPIOn;
const selectForgotPasswordMessage = ({
  auth: { forgotPasswordMessage = '' },
}) => forgotPasswordMessage;
const selectIsResetPasswordAPIOn = ({
  auth: { isResetPasswordAPIOn = false },
}) => isResetPasswordAPIOn;
const selectIsResetPasswordSuccess = ({
  auth: { isResetPasswordSuccess = '' },
}) => isResetPasswordSuccess;

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
    if (isEmpty(userDetails)) {
      dispatch(getMeAPIStart());
    }
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

  return {
    isUserVerifying,
    isUserVerified,
  };
};

export const useForgotPassword = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();
  const isForgotAPIOn = useSelector(selectIsForgotAPIOn);
  const forgotPasswordMessage = useSelector(selectForgotPasswordMessage);

  const onResetLinkClick = (e) => {
    e.preventDefault();
    dispatch(forgotPasswordStart({ email }));
  };

  return {
    email,
    setEmail,
    isForgotAPIOn,
    forgotPasswordMessage,
    onResetLinkClick,
  };
};

export const useResetPassword = (props) => {
  const { email = '', token = '' } = qs.parse(props.location.search);
  const dispatch = useDispatch();
  const history = useHistory();
  const [passwordDetails, setPasswordDetails] = useState({
    password: '',
    confirm_password: '',
  });
  const isResetPasswordAPIOn = useSelector(selectIsResetPasswordAPIOn);
  const isResetPasswordSuccess = useSelector(selectIsResetPasswordSuccess);

  useEffect(() => {
    if (isResetPasswordSuccess) {
      history.push('/auth');
    }
  }, [isResetPasswordSuccess]);

  const onChangeHandler = (e) => {
    setPasswordDetails({ ...passwordDetails, [e.target.name]: e.target.value });
  };

  const onResetPasswordClick = (e) => {
    e.preventDefault();

    // check if two password matches
    if (passwordDetails.password !== passwordDetails.confirm_password) {
      return dispatch(snackBarOpen('Two passwords must match', 'error'));
    }

    dispatch(
      resetPasswordStart({
        email,
        token,
        newPassword: passwordDetails.password,
      }),
    );

    return null;
  };

  return {
    passwordDetails,
    onChangeHandler,
    onResetPasswordClick,
    isResetPasswordAPIOn,
  };
};

export const useUserProfile = () => {
  const { getCurrentUser, userDetails, isUserLoading } = useGetMe();

  useEffect(() => {
    getCurrentUser();
  }, []);

  return {
    isUserLoading,
    userDetails,
  };
};

export const usePhotoUpload = () => {
  const [photoInputValue, setPhotoInputValue] = useState('');
  const [selectedFile, setSelectedFile] = useState();
  const dispatch = useDispatch();

  const handlePhotoInputChange = (e) => {
    const file = e.target.files[0];
    setPhotoInputValue(e.target.value);
    setSelectedFile(file);
  };

  useEffect(() => {
    if (!selectedFile) return;

    const reader = new FileReader();
    reader.readAsDataURL(selectedFile);
    reader.onloadend = () => {
      uploadImage(reader.result);
    };
  }, [selectedFile]);

  const uploadImage = (base64EncodedImage) => {
    dispatch(uploadProfilePicStart({ data: base64EncodedImage }));
  };

  return {
    photoInputValue,
    handlePhotoInputChange,
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
