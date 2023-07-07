/* eslint-disable no-debugger */

import axios from "axios";
import { toast } from "react-toastify";
import { TOASTER_STYLING_VALUES } from "../../config";

const jwtToken = JSON.parse(localStorage.getItem("dummy_user"));

const headers = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

if (jwtToken) headers.Authorization = `Bearer ${jwtToken?.access_token}`;

const api = axios.create({
  baseURL: process.env.REACT_APP_PRODUCTION_API_URL,
  // baseURL: process.env.REACT_APP_DEV_API_URL,
  headers,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 401) {
      toast.success(
        "Session expired, please signIn again to continue",
        TOASTER_STYLING_VALUES
      );
      localStorage.removeItem("dummy_user");
      window.location.href = "/";
    }

    let { message } = error.response.data;

    if (!message) {
      message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
    }

    const errors = {
      errors: error.response.data.errors,
      message,
    };

    // toast.error(message);

    throw errors;
  }
);

export default api;
