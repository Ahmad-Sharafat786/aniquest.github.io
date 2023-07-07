import React from "react";
import { PATH } from "../../config";
import { BsHouseDoor } from "react-icons/bs";
import { GoPrimitiveDot } from "react-icons/go";

export const SidebarData = [
  {
    title: "Home",
    icon: <BsHouseDoor size={24} />,
    path: PATH.DASHBOARD,
    pathList: [PATH.DASHBOARD],
    subNav: [
      {
        title: "Link 1",
        path: "",
        pathList: [],
        icon: <GoPrimitiveDot className="me-2 font-16" />,
      },
      {
        title: "Link 2",
        path: "",
        pathList: [],
        icon: <GoPrimitiveDot className="me-2 font-16" />,
      },
    ],
  },
  {
    title: "Single Link",
    path: "",
    icon: "",
  },
  {
    title: "Multi Links",
    icon: "",
    subNav: [
      {
        title: "Tab 1",
        subNav: [
          {
            title: "Link 1",
            path: "",
            pathList: [],
            icon: <GoPrimitiveDot className="me-2 font-16" />,
          },
          {
            title: "Link 2",
            path: "",
            pathList: [],
            icon: <GoPrimitiveDot className="me-2 font-16" />,
          },
        ],
      },
    ],
  },
];
