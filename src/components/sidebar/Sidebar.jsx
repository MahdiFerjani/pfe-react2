import { NavLink } from "react-router-dom";
import "../../Styles/Sidebar.css";
import React  from "react";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
 

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div >
          
          <h1>Company name</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
        <div className="sidebar__link active_menu_link">
          <i className="fa fa-home"></i>
          <NavLink to="/Dashboard">
            Dashboard
          </NavLink>
        </div>
        <h2>Tables</h2>
        <div className="sidebar__link ">
          <i className="fa fa-user-secret" aria-hidden="true"></i>
        <NavLink to="/encaissement">Encaissement</NavLink>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-building-o"></i>
          <a to="">Décaissement</a>
        </div>
        <div className="sidebar__link">
          <i className="fa fa-wrench"></i>
          <a to="">Objectifs</a>
        </div>
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <NavLink to='/' onClick={()=>localStorage.clear()}>Log out</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
