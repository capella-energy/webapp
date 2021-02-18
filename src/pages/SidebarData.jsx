import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io"; 

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiFillHome />,
        cName: "nav-text"
    },
    {
        title: "Learn",
        path: "/learn",
        icon: <AiIcons.AiFillBook />,
        cName: "nav-text"
    },
    {
        title: "Marketplace",
        path: "/marketplace",
        icon: <AiIcons.AiFillShop />,
        cName: "nav-text"
    },
    {
        title: "Profile",
        path: "/update-profile",
        icon: <IoIcons.IoMdPerson />,
        cName: "nav-text"
    }
]