import "../../Styles/LoggedNavbar.css"
import {NavLink,Link} from 'react-router-dom'
import AddCircle from "@material-ui/icons/AddCircle";
import IconButton from '@material-ui/core/IconButton';

const LoggedNavbar = ({ sidebarOpen, openSidebar }) => {
  const navs=[{path:"/category",
  title:"categories"},
  {path:"/dashboard",
  title:"dashboard"}]
  return (
    <nav className="loggednavbar">
      <div className="loggednav_icon" onClick={() => openSidebar()}>
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="loggednavbar__left">
      {navs.map(t =>
      <NavLink
        exact
        activeClassName="active_link"
        to={t.path}
      >
        {t.title}
      </NavLink>
    )}
      </div>
      <div className="loggednavbar__right">
    
        
      <IconButton  color="primary" >
         <AddCircle />
     </IconButton>
        
    
      </div>
    </nav>
  );
};

export default LoggedNavbar;



