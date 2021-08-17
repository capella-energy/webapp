import React from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";

export const SidebarData = [
    {
        title: "Home",
        path: "/",
        icon: <AiIcons.AiOutlineHome />,
        cName: "nav-text"
    },
    {
        title: "Learn",
        path: "/learn",
        icon: <FaIcons.FaRegLightbulb />,
        cName: "nav-text"
    },
    {
        title: "Marketplace",
        path: "/marketplace",
        icon: <AiIcons.AiOutlineShop/>,
        cName: "nav-text"
    },
    {
        title: "Billing",
        path: "/billing",
        icon: <AiIcons.AiOutlineFileText />,
        cName: "nav-text"
    }, 
    {
        title: "Profile",
        path: "/update-profile",
        icon: <BsIcons.BsPerson />,
        cName: "nav-text"
    }, 
    {
        title: "Logout",
        path: "/Login",
        icon: <AiIcons.AiOutlineLogout />,
        cName: "nav-text" 
    }
]