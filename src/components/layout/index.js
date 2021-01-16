/*
 * @Descripttion: 页面外层
 * @version: 2021 0101
 * @Author: will
 * @Date: 2021-01-01 18:54:08
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-15 14:03:00
 */
import { connect } from 'react-redux'
import { setNavId } from '../../actions/layout'
import { withRouter } from 'react-router-dom'
import HASH_HISTORY from '../../utils/history'
import Layout from './layout'
import '../../style/layout.scss'

const getMenuData = (layoutData, path) => {
  console.log(layoutData, path)
  const id = path.split('-')[0]
  const navData = layoutData.find(nav => nav.path === id) || {}
  const { routes = [] } = navData
  return routes
}

const routerArr = []

const findOne = (key, data, routerArr = [], index = 0) => {
  if (Array.isArray(data)) {
    if(key === data.routeId) 
  } else {
    return 
  }
}

const getDefaultSelectedKeys = path => {
  let res = path.split('-')
  const len = res.length
  res = res.concat(Array(3 - len).fill('0'))

  console.log('getDefaultSelectedKeys', {
    defaultSelectedNavId: res[0],
    defaultSelectedOptionId: res.slice(0, 2).join('-'),
    defaultSelectedKey: res.join('-'),
  })
  return {
    defaultSelectedNavId: res[0],
    defaultSelectedOptionId: res.slice(0, 2).join('-'),
    defaultSelectedKey: res.join('-'),
  }
}

const mapStateToProps = ({layoutData = {}} = {}) => {
  console.log('layoutData--------', layoutData)
  return {
    menuData: getMenuData(layoutData.navData, layoutData.path),
    ...getDefaultSelectedKeys(layoutData.path),
    ...layoutData,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    menuClick: e => {
      console.log(e)
      // dispatch(setNavId(e.key))
      console.log('---------------------------------------------------------------------')
      HASH_HISTORY.push(e.key)
    },
    setNavId: path => {
      console.log('setNavId----', path)
      dispatch(setNavId(path))
    }
  }
}

const MyLayout = connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout)

export default withRouter(MyLayout)
