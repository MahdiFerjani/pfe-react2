import { NavLink } from "react-router-dom";
import "../../Styles/Sidebar.css";
import homme from "../../images/homme1.png"
import React  from "react";
const Sidebar = ({ sidebarOpen, closeSidebar }) => {
 

  return (
    <div className={sidebarOpen ? "sidebar_responsive" : ""} id="sidebar">
      <div className="sidebar__title">
        <div >
        <img src={homme} alt="logo" />
          <h1>Code Hut</h1>
        </div>
        <i
          onClick={() => closeSidebar()}
          className="fa fa-times"
          id="sidebarIcon"
          aria-hidden="true"
        ></i>
      </div>

      <div className="sidebar__menu">
      <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#a5aaad'}} to="/Dashboard" 
      activeClassName="sidebar__link active_menu_link">
    
        <i style={{marginRight: '10px'}} class="fa fa-bar-chart" aria-hidden="true"></i>
           
            Dashboard
         
        </NavLink>
        <h2>Tables</h2>
        <br/>
        
        <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#a5aaad'}} to="/encaissement" 
      activeClassName="sidebar__link active_menu_link">
    
        <i style={{marginRight: '10px'}} class="fa fa-bar-chart" aria-hidden="true"></i>
           
            encaissement
         
      
        </NavLink>
        <br/>
        <br/>

       
        <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#a5aaad'}} to="/category" 
      activeClassName="sidebar__link active_menu_link">
    
        <i style={{marginRight: '10px'}} class="fa fa-bar-chart" aria-hidden="true"></i>
           
            decaissement
         
      
        </NavLink>
        <br/>
        <br/>


        <NavLink style={{ textDecoration: 'none', fontWeight: 700, color: '#a5aaad'}} to="/objectif" 
      activeClassName="sidebar__link active_menu_link">
    
        <i style={{marginRight: '10px'}} class="fa fa-bar-chart" aria-hidden="true"></i>
        prévisions
         
      
        </NavLink>
      
        <div className="sidebar__logout">
          <i className="fa fa-power-off"></i>
          <NavLink to='/' onClick={()=>localStorage.clear()}>Log out</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
