/* File to make the API calls here */
import { axiosInstance as axios } from '../api/api.instance';

const loginUser = (data) =>
  axios({
    method: 'POST',
    url: '/auth/signIn',
    data,
  });

const registerUser = (data) =>
  axios({
    method: 'POST',
    url: '/auth/signUp',
    data,
  });

const getMe = () =>
  axios({
    method: 'GET',
    url: '/auth/getMe',
  });

const verifyAccount = (data) =>
  axios({
    method: 'POST',
    url: '/auth/verify-account',
    data,
  });

const forgotPassword = (data) =>
  axios({
    method: 'PUT',
    url: '/auth/forgot-password',
    data,
  });

const resetPassword = (data) =>
  axios({
    method: 'PUT',
    url: '/auth/reset-password',
    data,
  });

const updateProfilePic = (data) =>
  axios({
    method: 'PUT',
    url: '/auth/update-profile-pic',
    data,
  });

const getSpecificUser = (data) =>
  axios({
    method: 'POST',
    url: '/auth/getUser',
    data,
  });

export const APIS = {
  loginUser,
  registerUser,
  getMe,
  verifyAccount,
  forgotPassword,
  resetPassword,
  updateProfilePic,
  getSpecificUser,
};
