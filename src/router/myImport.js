/*
 * @author: 20023707
 * @Date: 2021-01-13 14:49:26
 * @date:
 * @Descripttion:
 * @version: 20201009
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-14 15:14:20
 * @FilePath: \Myblog\src\router\myImport.js
 */
// module.exports = file => () => import(file)

import Loadable from 'react-loadable'
import MyError from '@/components/error'

const myImport = file => Loadable({ loader: () => import(`@/containers/${file}.js`), loading: MyError })

export default myImport
