import React from "react";

const NoPage = React.lazy(() => import("./NoPageFound"));
const SignIn = React.lazy(() => import("./SignIn"));
const Dashboard = React.lazy(() => import("./Dashboard"));
const LandingPage = React.lazy(() => import("./LandingPage"));
const AboutPage = React.lazy(() => import("./AboutUs"));
const PricingPage = React.lazy(() => import("./Pricing"));
const Login = React.lazy(() => import("./Login"));
const Signup = React.lazy(() => import("./Signup"));
const Resetpassword = React.lazy(() => import("./ResetPassword"));
const Translator = React.lazy(() => import("./Translator"))
const FormikForm = React.lazy(() => import("./FormikForm"))

const WEB_PAGES = {
  NOPAGE: NoPage,
  SIGN_IN: SignIn,
  DASHBOARD: Dashboard,
  LANDING_PAGE: LandingPage,
  ABOUT_PAGE: AboutPage,
  PRICING_PAGE: PricingPage,
  LOG_IN: Login,
  SIGN_UP: Signup,
  RESET_PASSWORD: Resetpassword,
  TRANSLATOR: Translator,
  FORMIKFORM: FormikForm
};

export { WEB_PAGES };
