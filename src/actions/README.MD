
ACTION 统一格式
以下以home.js 为例


import { createAction } from "redux-actions"
import HttpUtil from "../utils/httpUtils" // 关于http请求的一些方法封装

第一个 getAllUsers 方法： 是用来发送请求获取数据

第二个 userInfoState 方法： 是用来更新数据

export const getAllUsers = (param, handleResult) => () => {
  HttpUtil.postData("/user/allUsers", {}).then( response => {
    if (response.status === 0) {
      handleResult(response.data)
    }
  })
}

export const userInfoState = createAction("userInfoState", payload => payload)