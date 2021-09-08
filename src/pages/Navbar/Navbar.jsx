import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import "./Navbar.css";

function Navbar() {
  const [sidebar, setSidebar] = useState(false); 

  const showSidebar = () => setSidebar(!sidebar); 

  return (
    <>
     <nav className="staticSidebar">
    
    <ul className="nav-menu-items" >
      
      <li className="static-navbar">
      <h1 className="static-nav-logo"><span id="myTitle">my</span>Capella</h1>
        
      </li>
      {SidebarData.map((item, index) => {
        return (
          <li key={index} className={item.cName}>
          <Link to={item.path}>
            {item.icon}
            <span id="title-span">{item.title}</span>
          </Link>
        </li>
        );
      })}
    </ul>
  </nav>
  
      <div className="navbar">
        <Link to="#" className="bars openNav">
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
        
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
    
        <ul className="nav-menu-items" onClick={showSidebar}>
          
          <li className="navbar-toggle">
         
          <h1 className="static-nav-logo"><span id="myTitle">my</span>Capella</h1>
          <Link to="#" className="bars closeNav">
              <AiIcons.AiOutlineClose/>
            </Link>
            
          </li>
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
              <Link to={item.path}>
                {item.icon}
                <span id="title-span">{item.title}</span>
              </Link>
            </li>
            );
          })}
        </ul>
      </nav>
    
    </>
  )
}

export default Navbar; 