/**
 * Created by september on 2018/6/7.
 */

import * as actionTypes from "./index"

// 模拟用户信息
// const user = {
//   name: "",
//   age: 24,
// }

export function changeValue(user) {
  return {
    type: actionTypes.CHANGE_VALUE,
    name: user,
  }
}


