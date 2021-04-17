import React from "react";
import { Route, Switch,Redirect} from "react-router";
import Home from "./Home";
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./components/Navbar"
import Login  from "./Login"
import dash from "./dash"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
const App=()=>{
    function isLoggedIn() {
        if (localStorage.getItem('token')) {
          return true;
        }
        return false;
      }
return(
    <>
<Navbar/>
<br/>
<br/>
<Switch>
<Route exact path="/" component={Home}/> 
<Route exact path="/service" component={Service}/> 
<Route exact path="/contact" component={Contact}/>
<Route exact path="/login" render={() => (isLoggedIn() ? <Redirect to="/dash" /> : <Login />)}/>
<Route exact path="/dash" component={dash}/>
<Redirect to="/"/>
</Switch>
</>
)
}
export default App;