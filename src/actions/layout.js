/*
 * @author: 20023707
 * @Date: 2021-01-04 14:08:50
 * @date:
 * @Descripttion:
 * @version: 20201009
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-13 14:36:32
 * @FilePath: \Myblog\src\actions\layout.js
 */
export const LAYOUT_SET_NAVID = 'LAYOUT_SET_NAVID'
export const LAYOUT_SET_CURRENT_NAV_DATA = 'LAYOUT_SET_CURRENT_NAV_DATA'


export const setNavId = (path = '') => {
  return {
    type: LAYOUT_SET_NAVID,
    path
  }
}

export const setCurrentNavData = () => {
  return {
    type: LAYOUT_SET_CURRENT_NAV_DATA
  }
}
