/*
 * @author: 20023707
 * @Date: 2021-01-14 14:19:31
 * @date:
 * @Descripttion:
 * @version: 20201009
 * @LastEditors: 20023707
 * @LastEditTime: 2021-01-14 14:26:52
 * @FilePath: \Myblog\src\components\box\index.js
 */
import React from "react"
import { Route, useRouteMatch, Switch } from "react-router-dom"
import Content from '../../containers/document/content/Content'

const Box = () => {
  const { url } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={`${url}/content`} component={Content}/>
      </Switch>
    </div>
  )
}

export default Box
