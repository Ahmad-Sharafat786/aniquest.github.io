const ERROR = {
  SYSTEM_ERROR: "System error. Please try again later!",
};

const PATH = {
  NOPAGE: "*",
  // SIGN_IN: "/",
  DASHBOARD: "/dashboard",
  LANDING_PAGE: "/",
  ABOUT_PAGE: "/aboutus",
  PRICING_PAGE: "/pricing",
  FORMS: "/forms",
  LOG_IN: "/login",
  SIGN_UP: "/signup",
  RESET_PASSWORD: "/resetpassword",
  TRANSLATOR: "/translator",
  FORMIKFORM: "/formik",
};

const APP_SETTINGS = {
  API_PATH: {
    ACCOUNT: {
      getToken: "Account/GetToken",
    },
  },
};

const AZURE_BLOB_BASE_URL = "blob_url_here";

const ROLE = {
  ADMIN1: 1,
  ADMIN2: 2,
  ADMIN3: 3,
};

const TOASTER_STYLING_VALUES = {
  position: "top-right",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

const PAGINATION_PAGE_SIZE = 10;

export {
  ERROR,
  PATH,
  APP_SETTINGS,
  ROLE,
  TOASTER_STYLING_VALUES,
  AZURE_BLOB_BASE_URL,
  PAGINATION_PAGE_SIZE,
};
