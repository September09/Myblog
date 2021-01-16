/*
 * @Descripttion: 路由
 * @version: 2021-01-01
 * @Author: will
 * @Date: 2020-12-30 20:21:25
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-14 15:21:15
 */
import React from "react"
// import { Route } from "react-router"
import { HashRouter, Route, Switch, Redirect } from "react-router-dom"
import { renderRoutes } from "react-router-config"
import App from "../App"
// import Home from "@/containers/Home"
// import Stuff from "../containers/Stuff"
// import Contact from "../containers/Contact"
// import Register from "../containers/register"
// import Login from "../containers/login"
import MyLayout from '../components/layout'
import routersMap from './routersMap'
import myImport from './myImport'


const RouteMap = () =>
  <HashRouter>

    <div className="container">
      <MyLayout>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/home" component={myImport('Home')} />
          {/* <Route path="/stuff" component={Stuff} />*/}
          {/* <Route path="/contact" component={Contact} />*/}
          {/* <Route path="/register" component={Register} />*/}
          {/* <Route path="/login" component={Login} />*/}
          {/* <Route exact path="/layout" component={MyLayout} /> */}

          {/* <Route exact path="/stuff" component={Stuff} /> */}
          {/* <Redirect to="/"/> */}
          {renderRoutes(routersMap)}
          <Redirect to="/" from="/222"/>
        </Switch>
      </MyLayout>

    </div>
  </HashRouter>


export default RouteMap
