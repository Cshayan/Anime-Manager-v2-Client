/* File for making API calls in any page -> Adding headers in form of interceptors */

import axios from "axios";
import { API_ROOT } from "./api-config";
import { ANIME_TOKEN } from "../constants/url";

// Create an instance of axios
export const axiosInstance = axios.create({
  baseURL: API_ROOT,
  headers: { "Content-Type": "application/json" },
});

// Add token to headers in every request if token is present in localstorage
axiosInstance.interceptors.request.use(
  function (config) {
    // get token from local storage
    const animeToken = localStorage.getItem(ANIME_TOKEN);

    // if token is present in localstorage add it to header of the request
    if (animeToken) {
      config.headers.Authorization = animeToken;
    } else {
      config.headers.Authorization = null;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error.response);
  }
);
