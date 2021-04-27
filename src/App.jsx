import React ,{useState}from "react";
import { Route, Switch,Redirect} from "react-router";

import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Login  from "./Login"
import Chart from "./components/Dashboard/Chart"
import Encaissement from "./components/Dashboard/encaissement"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import "./Styles/Dashboard.css";
import LoggedNavbar from "./components/Navbar/LoggedNavbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./Styles/Main.css"

function App(){
    function isLoggedIn() {
        if (localStorage.getItem('token')) {
          return true;
        }
        return false;
      }
      const [sidebarOpen, setsidebarOpen] = useState(false);
      const openSidebar = () => {
        setsidebarOpen(true);
      };
      const closeSidebar = () => {
        setsidebarOpen(false);
      
      };
return(
    <>
  
<Switch >
<Route exact path="/" component={Home}/> 
<Route exact path="/service" component={Service}/> 
<Route exact path="/contact" component={Contact}/>
<Route exact path="/login" component={Login}/>
<div className="container2">
<LoggedNavbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
<main>
<Route exact path="/encaissement" component={() => (!isLoggedIn() ? <Redirect to="/login" />:<Encaissement/>)}/>
<Route exact path="/dashboard" component={() => (!isLoggedIn() ? <Redirect to="/login" /> : <Chart/>)}/>

<Route exact path="/dashboard/opération" component={() => (!isLoggedIn() ? <Redirect to="/login" /> : <Chart/>)}/>
</main>
<Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
</div>
<Redirect to='/'/>
</Switch>
</>
)
}
export default App;