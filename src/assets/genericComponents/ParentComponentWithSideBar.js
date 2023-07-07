import React from "react";
import { Header } from ".";
import Sidebar from "./SideBar";
// import swal from 'sweetalert2'
export function ParentComponentWithSideBar({ children, ...rest }) {
  return (
    <div className="main-wrapper">
      <Header />
      <Sidebar />
      <div className="page-wrapper">
        <div className="container-fluid">{children}</div>
      </div>
    </div>
  );
}
