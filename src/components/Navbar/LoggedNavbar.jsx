import "../../Styles/LoggedNavbar.css"



const LoggedNavbar = ({ sidebarOpen, openSidebar }) => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onClick={() => openSidebar()}>
        <i className="fas fa-bars" aria-hidden="true"></i>
      </div>
      <div className="lognavbar__left">
       
        <a to="/"></a>
        <a className="active_link" href="#">
          Admin
        </a>
      </div>
      <div className="lognavbar__right">
     
      </div>
    </nav>
  );
};

export default LoggedNavbar;
