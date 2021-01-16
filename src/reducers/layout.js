/*
 * @author: 20023707
 * @Date: 2021-01-04 15:37:31
 * @date:
 * @Descripttion:
 * @version: 20201009
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-14 16:17:13
 * @FilePath: \Myblog\src\reducers\layout.js
 */
import { LAYOUT_SET_NAVID, LAYOUT_SET_CURRENT_NAV_DATA } from '../actions/layout'
import layoutData from '../router/routersMap'
// import { combineReducers } from 'redux'

/**
 * @name: 查找对应数据
 * @param {*} id
 * @param {*} data
 * @return {*}
 * @author: 20023707
 * @version: 20201009
 */
function findObjById(path, data = []) {
  const navId = path.split('-')[0]
  data.find(navData => {
    return navId === navData.path
  })
}

const initialState = {
  navData: layoutData,
  path: '0',
}

const layout = (state = initialState, action) => {
  switch (action.type) {
  case LAYOUT_SET_NAVID:
    return Object.assign({}, state, { path: action.path })
  case LAYOUT_SET_CURRENT_NAV_DATA:
    return Object.assign({}, state, { menuData: findObjById(state.path, state.navData)})
  default:
    return state
  }
}
// const layoutReducer = combineReducers(layout)

export default layout
