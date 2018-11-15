/**
 * Created by september on 2018/7/11.
 */

import { handleActions } from "redux-actions"
// import * as actionTypes from "../actions/index"

const initialState = {
  "data": [],
  "user": null,
}

export default handleActions({
  userInfoState: (state = initialState, { payload }) => {
    return {
      ...state,
      ...payload
    }
  }
}, initialState)
