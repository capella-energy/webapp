import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import "../assets/Navbar.css";



function Navbar() {
  const [sidebar, setSidebar] = useState(false); 

  const showSidebar = () => setSidebar(!sidebar); 

  return (
    <>
      <div className="navbar">
        <Link to="#" className="bars closeNav">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        <AiIcons.AiFillCloud />
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    
        <ul className="nav-menu-items" onClick={showSidebar}>
          
          <li className="navbar-toggle">
          <h1 className="nav-logo">Capella</h1>
            <Link to="#" className="bars">
              
              <AiIcons.AiOutlineClose/>
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span>{item.title}</span>
              </Link>
            </li>
            );
          })}
        </ul>
      </nav>
    
    </>
  )
}

export default Navbar