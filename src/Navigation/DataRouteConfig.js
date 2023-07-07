import { PATH } from "../config";
import { WEB_PAGES } from "../components";

let PathName = Object.keys(PATH, "path");
PathName.splice(0, 1);

export const INITIAL_VALUE = PathName.map((item) => {
  let Val = WEB_PAGES[item];

  if (
    item === "SIGN_IN" ||
    item === "LANDING_PAGE" ||
    item === "ABOUT_PAGE" ||
    item === "PRICING_PAGE" ||
    item === "FORMS" ||
    item === "LOG_IN" ||
    item === "SIGN_UP" ||
    item === "RESET_PASSWORD" ||
    item ===  "TRANSLATOR"  ||
    item === "FORMIKFORM"
  ) {
    return { path: PATH[item], page: <Val />, route: "PublicRoute" };
  }
  return { path: PATH[item], page: <Val />, route: "PrivateRoute" };
});
