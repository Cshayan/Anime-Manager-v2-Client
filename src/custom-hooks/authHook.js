/* Custom Hooks for authentication */
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import qs from 'query-string';
import { useQuery, useMutation } from 'react-query';
import { useHistory } from 'react-router-dom';
import { snackBarOpen } from 'actions/snackbarAction';
import { getCurrentUser, loginUser, registerUser } from 'services/authService';
import {
  logOutUserSuccess,
  verifyAccountAPIStart,
  forgotPasswordStart,
  resetPasswordStart,
  uploadProfilePicStart,
  getMeAPISuccess,
  loginAPISuccess,
  loginAPIFail,
  verifyAccountAPISuccess,
  verifyAccountAPIFail,
} from '../actions/authAction';
import { resetAll } from '../actions/resetAction';
import { openLogoutDialog, closeLogoutDialog } from '../actions/dialogAction';
import { drawerClose } from '../actions/drawerAction';
import { ANIME_TOKEN } from '../constants/url';

const selectLogoutDialog = (state) => state.dialog.isLogoutDialogOpen;
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
  const animeToken = localStorage.getItem(ANIME_TOKEN);
  const hasUserRegistered = useSelector(
    (state) => state.auth.hasUserRegistered,
  );

  return {
    isAuthenticated: !!animeToken,
    hasUserRegistered,
  };
};

export const useLogin = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [loginDetails, setLoginDetails] = useState({
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value });
  };

  const { mutateAsync: loginUserAPI, isLoading: isUserLogging } = useMutation(
    (values) => loginUser(values),
    {
      onSuccess: (response) => {
        const { data = {} } = response || {};
        dispatch(loginAPISuccess(data));
        history.push('/dashboard');
      },
      onError: (error) => {
        dispatch(loginAPIFail(error?.response?.data));
        dispatch(snackBarOpen(error?.response?.data?.error, 'info'));
      },
    },
  );

  const onLoginSubmit = (e) => {
    e.preventDefault();
    loginUserAPI(loginDetails);
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

  const [registerDetails, setLoginDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  const onChangeHandler = (e) => {
    setLoginDetails({ ...registerDetails, [e.target.name]: e.target.value });
  };

  const { mutateAsync: registerUserAPI, isLoading: isUserLogging } =
    useMutation((values) => registerUser(values), {
      onSuccess: (response) => {
        const { data = {} } = response || {};
        dispatch(verifyAccountAPISuccess());
        dispatch(snackBarOpen(data?.message, 'success'));
      },
      onError: (error) => {
        dispatch(verifyAccountAPIFail());
        dispatch(snackBarOpen(error.response.data.error, 'success'));
      },
    });

  const onRegisterSubmit = (e) => {
    e.preventDefault();
    registerUserAPI(registerDetails);
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
  const userDetails = useSelector((state) => state.auth.user);

  const { isLoading: isUserLoading } = useQuery(
    ['get-current-user'],
    () => getCurrentUser(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      onSuccess: async (data) => {
        const { data: currentUserData } = data;
        dispatch(getMeAPISuccess(currentUserData));
      },
    },
  );

  return {
    isUserLoading,
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
  const { userDetails, isUserLoading } = useGetMe();

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
