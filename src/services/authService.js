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

export const APIS = { loginUser, registerUser, getMe };
