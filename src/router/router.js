import React from "react"
import { Route, hashHistory } from "react-router"
import { HashRouter } from "react-router-dom"
import App from "../App"
// import Home from "../containers/Home"
// import Stuff from "../containers/Stuff"
// import Contact from "../containers/Contact"
// import Register from "../containers/register"
// import Login from "../containers/login"


const RouteMap = () =>
  <HashRouter history={hashHistory}>

    <div className="container">
      <Route exact path="/" component={App} />
      {/* <Route path="/home" component={Home} />*/}
      {/* <Route path="/stuff" component={Stuff} />*/}
      {/* <Route path="/contact" component={Contact} />*/}
      {/* <Route path="/register" component={Register} />*/}
      {/* <Route path="/login" component={Login} />*/}
    </div>
  </HashRouter>


export default RouteMap
