/*
 * @Descripttion: 页面外层
 * @version: 2021 0101
 * @Author: will
 * @Date: 2021-01-01 18:54:08
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-15 11:12:36
 */
import React, { Component } from "react"
import { Layout, Breadcrumb } from 'antd';
import LayoutNav from './components/LayoutNav'
import LayoutMenu from './components/LayoutMenu'

const { Header, Content } = Layout;


class MyLayout extends Component {
  constructor(props) {
    super(props)
    console.log('props', props)
    this.props.setNavId(this.props.location.pathname)
    this.props.history.listen(route => {
      console.log('this.props.history.listen', route)
      this.props.setNavId(route.pathname)
    })
  }
  render() {
    console.log('MyLayout render props', this.props)
    return (
      <Layout>
        <Header className="header">
          {/* <div className="logo" /> */}
          <LayoutNav {...this.props} />
        </Header>
        <Layout>
          <LayoutMenu {...this.props} />

          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
              {this.props.children}
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default MyLayout
