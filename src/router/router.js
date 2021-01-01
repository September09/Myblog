/*
 * @Descripttion: 路由
 * @version: 2021-01-01
 * @Author: will
 * @Date: 2020-12-30 20:21:25
 * @LastEditors: will
 * @LastEditTime: 2021-01-01 21:50:20
 */
import React from "react"
import { Route, hashHistory } from "react-router"
import { HashRouter } from "react-router-dom"
import App from "../App"
// import Home from "../containers/Home"
// import Stuff from "../containers/Stuff"
// import Contact from "../containers/Contact"
// import Register from "../containers/register"
// import Login from "../containers/login"
import MyLayout from '../components/layout'


const RouteMap = () =>
  <HashRouter history={hashHistory}>

    <div className="container">
      <Route exact path="/" component={App} />
      {/* <Route path="/home" component={Home} />*/}
      {/* <Route path="/stuff" component={Stuff} />*/}
      {/* <Route path="/contact" component={Contact} />*/}
      {/* <Route path="/register" component={Register} />*/}
      {/* <Route path="/login" component={Login} />*/}
      <Route exact path="/layout" component={MyLayout} />
    </div>
  </HashRouter>


export default RouteMap
