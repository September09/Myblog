/*
 * @author: 20023707
 * @Date: 2021-01-12 15:06:12
 * @date:
 * @Descripttion:
 * @version: 20201009
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-13 14:33:53
 * @FilePath: \Myblog\src\components\layout\components\LayoutNav.js
 */
import React from "react"
import { Menu } from 'antd';

const LayoutNav = ({navData = [], menuClick = () => {}, defaultSelectedNavId = '0'} = {}) =>
  <Menu theme="dark" mode="horizontal" selectedKeys={[defaultSelectedNavId]} onClick={menuClick}>
    {
      navData.map(nav => {
        return <Menu.Item key={nav.path}>{nav.pathName}</Menu.Item>
      })
    }
  </Menu>

export default LayoutNav

