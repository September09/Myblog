/*
 * @Descripttion: 页面外层
 * @version: 2021 0101
 * @Author: will
 * @Date: 2021-01-01 18:54:08
 * @LastEditors: will
 * @LastEditTime: 2021-01-01 21:19:29
 */
import React, { Component } from "react"
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import layoutData from '../../constData/layout'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const ICON_LIST = [<UserOutlined />, <LaptopOutlined />, <NotificationOutlined />]

class MyLayout extends Component {
  render() {
    return (
      <Layout>
        <Header className="header">
          <div className="logo" />
          {this.setNav()}
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            {this.setCategory()}
          </Sider>
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
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }

  setNav() {
    return (
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['0']}>
        {
          layoutData.map(nav => {
            return <Menu.Item key={nav.navId}>{nav.navName}</Menu.Item>
          })
        }
      </Menu>
    )
  }

  setCategory(navId = 0) {
    const navData = layoutData.find(nav => nav.navId === navId) || {}
    const { categoryList = [] } = navData
    return (
      <Menu
        mode="inline"
        defaultSelectedKeys={['0']}
        defaultOpenKeys={['0']}
        style={{ height: '100%', borderRight: 0 }}
      >
        {
          categoryList.map((category, categoryIndex) => {
            const iconIndex = categoryIndex % ICON_LIST.length
            return (
              <SubMenu key={category.categoryId} icon={ICON_LIST[iconIndex]} title={category.categoryName} >
                {
                  category.itemList.map(item => {
                    return <Menu.Item key={item.itemId}>{item.itemName}</Menu.Item>
                  })
                }
              </SubMenu>
            )
          })
        }
      </Menu>
    )
  }
}

export default MyLayout
