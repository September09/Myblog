/**
 * Created by september on 2018/6/7.
 */
import { handleActions } from "redux-actions"
// import * as actionTypes from "../actions/index"

const initialState = {
  "userName": "",
  "password": ""
}

export default handleActions({
  updateBindMobileState: (state = initialState, { payload }) => {
    return {
      ...state,
      ...payload
    }
  }
}, initialState)
