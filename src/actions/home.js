/**
 * Created by september on 2018/7/11.
 */

import { createAction } from "redux-actions"
// import * as actionTypes from "./index"
import HttpUtil from "../utils/httpUtils"

// export const hasUser = () => () => {
//
// }
export const getAllUsers = (param, handleResult) => () => {
  HttpUtil.postData("/user/allUsers", {}).then( response => {
    if (response.status === 0) {
      handleResult(response.data)
    }
  })
}

export const userInfoState = createAction("userInfoState", payload => payload)
