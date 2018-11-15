/**
 * Created by september on 2018/6/7.
 */
import { handleActions } from "redux-actions"
// import * as actionTypes from "../actions/index"

const initialState = {
  loginStatus: "Login In",
  isSuccess: false,
  user: ""
}

export default handleActions({
  loginIn: (state = initialState, { payload }) => {
    return {
      ...state,
      ...payload
    }
  }
}, initialState)

