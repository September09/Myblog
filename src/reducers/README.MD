
reducer 统一格式为

import { handleActions } from "redux-actions"

const initialState = {
  "data": [] 初始化当前模块需要的数据
}

以下以userInfoState为例
userInfoState 主要为页面当前所需要的数据状态

export default handleActions({
  userInfoState: (state = initialState, { payload }) => {
    return {
      ...state,
      ...payload
    }
  }
}, initialState)