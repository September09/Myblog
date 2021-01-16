/*
 * @author: 20023707
 * @Date: 2021-01-12 16:09:14
 * @date:
 * @Descripttion:
 * @version: 20201009
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-15 11:29:00
 * @FilePath: \Myblog\src\components\layout\components\LayoutMenu.js
 */

import React from "react"
import { Layout, Menu } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { Sider } = Layout;
const { SubMenu } = Menu;
const ICON_LIST = [<UserOutlined />, <LaptopOutlined />, <NotificationOutlined />]

const LayoutMenu = ({menuData = [], menuClick = () => {}, defaultSelectedOptionId, defaultSelectedKey} = {}) =>
  <Sider width={200} className="site-layout-background">
    <Menu
      mode="inline"
      selectedKeys={[defaultSelectedKey]}
      openKeys={[defaultSelectedOptionId]}
      style={{ height: '100%', borderRight: 0 }}
      onSelect={menuClick}
    >
      {
        menuData.map((category, categoryIndex) => {
          const iconIndex = categoryIndex % ICON_LIST.length
          return (
            <SubMenu key={category.path} skey={category.path} icon={ICON_LIST[iconIndex]} title={category.pathName} onTitleClick={menuClick}>
              {
                category.routes && category.routes.map(item => {
                  return <Menu.Item key={item.path}>{item.pathName}</Menu.Item>
                })
              }
            </SubMenu>
          )
        })
      }
    </Menu>
  </Sider>

export default LayoutMenu
