/*
 *  File to handle dynamic API calls in development and production environment
 */

import { URL } from "../constants/url";

let backEndHost;
let apiVersion = URL.API_VERSION_ONE;

const frontEndHostname = window && window.location && window.location.hostname;

switch (frontEndHostname) {
  case URL.productionFrontEndHostName:
    backEndHost = "";
    break;
  case URL.developmentFrontEndHostName:
    backEndHost = URL.developmentBackEndHostName;
    break;
  default:
    backEndHost = URL.developmentBackEndHostName;
}

// eg:- http://localhost:5000/api/v1
export const API_ROOT = `${backEndHost}/api/${apiVersion}`;
