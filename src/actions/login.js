/**
 * Created by september on 2018/6/7.
 */
import { createAction } from "redux-actions"
// import * as actionTypes from "./index"
import HttpUtil from "../utils/httpUtils"

export const login = (param, handleResult) => () => {
  HttpUtil.postData("/user/login", param).then( response => {
    console.log(response)
    if (response.status === 0) {
      handleResult(response)
    }
  })
}

export const register = (param, handleResult) => () => {
  console.log("param", param)
  HttpUtil.postData("/user/register", param).then( response => {
    if (response.status === 0) {
      handleResult(response)
    }
  })
}

export const loginIn = createAction("loginIn", payload => payload)
export const updateBindMobileState = createAction("updateBindMobileState", payload => payload)


