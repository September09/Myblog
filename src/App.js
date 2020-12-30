/**
 * Created by september on 2018/5/27.
 */

import React, { Component } from "react"
// import { NavLink } from "react-router-dom"
import "./style/common.scss"
// import Header from "./components/header"
// import Footer from "./components/Footer"
// import Sider from "./components/sider"
// import Home from "./containers/Home"
// import { Layout } from "antd"
// const { Content } = Layout

export default class App extends Component {
  constructor(props) {
    super(props)
  }
  componentDidMount() {

  }
  render() {
    return (
      <div style={{width: "100%", height: "100%"}}>
        {/* <Home/>*/}
        我的个人博客 干的漂亮
      </div>
    )
  }
}

