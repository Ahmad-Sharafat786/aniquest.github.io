import { Link, useLocation } from "react-router-dom";
import React, { useState } from "react";
import { BsArrowRightShort, BsArrowDownShort } from "react-icons/bs";

export default function SubMenu(props) {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => {
    setSubnav(!subnav);
  };
  let location = useLocation();
  return (
    <React.Fragment>
      <li
        className={` ${
          props?.item?.path?.includes(location?.pathname) ? "active" : ""
        }`}
      >
        <Link
          onClick={showSubnav}
          to={{ pathname: props?.item?.path ? props.item.path : "" }}
        >
          {props?.item?.icon}
          <span>{props?.item?.title}</span>
          {props?.item?.subNav && subnav ? (
            <BsArrowDownShort
              className="ms-auto right_arrow_hide me-0"
              size={23}
            />
          ) : props.item.subNav ? (
            <BsArrowRightShort
              className="ms-auto right_arrow_hide me-0"
              size={23}
            />
          ) : null}
        </Link>
      </li>
      <ul className={` d-block`}>
        {subnav &&
          props.item.subNav?.map((navItem, idx) => {
            return (
              <React.Fragment>
                {navItem.subNav ? (
                  <SubMenu key={idx} item={navItem} />
                ) : (
                  <li
                    className={` ${
                      navItem?.pathList?.includes(location?.pathname)
                        ? "active"
                        : ""
                    }`}
                  >
                    <Link
                      className={` ${
                        navItem?.pathList?.includes(location?.pathname)
                          ? ""
                          : "text-white"
                      }`}
                      key={idx}
                      to={{ pathname: navItem?.path }}
                      onClick={navItem?.onClick}
                    >
                      <div className="d-flex align-items-center justiy-content-center">
                        {navItem?.icon}
                        <div className="SubnavLabel">{navItem.title}</div>
                      </div>
                    </Link>
                  </li>
                )}
              </React.Fragment>
            );
          })}
      </ul>
    </React.Fragment>
  );
}
