/* eslint-disable */
import React from "react";
import { FaBars } from "react-icons/fa";
import { Dropdown } from "react-bootstrap";
import { SignOut } from "./SignOut";
import { IMAGES } from "../images";
import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import { BsChevronDown } from "react-icons/bs";
import { createImageFromInitials } from "../genericAction";
import { ToastContainer } from "react-toastify";

export function Header() {
  const dummyUser = JSON.parse(localStorage.getItem("dummy_user"));

  document.body.style.backgroundColor = "#f5f5f5";

  return (
    <>
      <ToastContainer />
      <div className="header">
        {/* Logo  */}
        <div className="header-left">
          <Link to="#" className="logo">
            <img
              src={IMAGES.PROFILELOGO}
              alt="Logo"
              className="img-fluid monu_logo"
            />
          </Link>
        </div>
        <div className="PageName">
          <a href="javascript:void(0)" id="toggle_btn">
            <FaBars className="toggleset" />
          </a>
          {/* {auth?.dummy_user?.userType === "admin" && (
            <>
              {
                location.pathname === PATH.DASHBOARD &&
                <h3 className="ml-4">{`Dashboard`}</h3>
              }
            </>
          )} */}
        </div>
        {/* /Logo */}
        {/* Mobile Menu Toggle */}
        <a href="javascript:void(0)" className="mobile_btn" id="mobile_btn">
          <FaBars />
        </a>
        {/* /Mobile Menu Toggle */}
        <ul className="nav user-menu">
          <li className="nav-item dropdown has-arrow">
            <Dropdown className="user-dropdown  h-100">
              <Dropdown.Toggle
                variant="success"
                id="dropdown-basic"
                className="user_dropdown"
              >
                <span className="user-img mt-0">
                  {dummyUser ? (
                    <img
                      className="rounded-circle"
                      src={IMAGES.PROFILELOGO}
                      width="31"
                      alt={dummyUser?.userType}
                    />
                  ) : (
                    <img
                      src={createImageFromInitials(
                        31,
                        dummyUser?.userType,
                        "#525E34"
                      )}
                      alt="image"
                      className="rounded-circle"
                    />
                  )}
                  <BsChevronDown className="text-dark ml-2" />
                </span>
              </Dropdown.Toggle>
              <Dropdown.Menu className="profile-dropmenu">
                <Dropdown.Item className="d-block px-0">Profile</Dropdown.Item>
                <Dropdown.Item className="d-block px-0">
                  <SignOut />
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
        </ul>
        <Tooltip id="my-tooltip" />
      </div>
    </>
  );
}
