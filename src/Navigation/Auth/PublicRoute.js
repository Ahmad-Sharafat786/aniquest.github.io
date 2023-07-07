import React from "react";
import { LoaderPageWithoutBG } from "../../assets";

function PublicRoute({ children }) {
  const jwtToken = JSON.parse(localStorage.getItem("dummy_user"));
  if (jwtToken) {
    return (window.location.href = "/dashboard");
  } else {
    return (
      <>
        {jwtToken ? <LoaderPageWithoutBG /> : null}
        {children}
      </>
    );
  }
}

export default PublicRoute;
