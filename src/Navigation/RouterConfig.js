/*eslint-disable*/
import React from "react";
import { Routes, Route } from "react-router-dom";
import { WEB_PAGES } from "../components";
import { PATH } from "../config";
import PublicRoute from "./Auth/PublicRoute";
import PrivateRoute from "./Auth/PrivateRoute";
import { INITIAL_VALUE } from "./DataRouteConfig";
export const RouterConfig = () => {
  return (
    <div>
      <Routes>
        {INITIAL_VALUE?.map((item, index) => (
          <React.Fragment key={index}>
            {item?.route === "PublicRoute" ? (
              <Route
                path={item?.path}
                element={<PublicRoute>{item?.page}</PublicRoute>}
              ></Route>
            ) : (
              <Route
                path={item?.path}
                element={<PrivateRoute>{item?.page}</PrivateRoute>}
              ></Route>
            )}
          </React.Fragment>
        ))}
        <Route path={PATH.NOPAGE} element={<WEB_PAGES.NOPAGE />}></Route>
      </Routes>
    </div>
  );
};
