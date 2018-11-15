/**
 * Created by september on 2018/6/25.
 */

import * as actionTypes from "../actions/index"

const initialState = {
  registerStatus: "Register",
  isSuccess: false,
}

export default function register(state = initialState, action) {
  switch (action.type) {
  case actionTypes.REGISTER_IN_DOING:
    return {
      ...state,
      registerStatus: "Register Ing",
      isSuccess: false,
    }
  case actionTypes.REGISTER_IN_DONE:
    return {
      ...state,
      registerStatus: "Register Success",
      isSuccess: true,
    }
  case actionTypes.REGISTER_IN_ERROR:
    return {
      ...state,
      registerStatus: "Register Error",
      isSuccess: true,
    }
  default:
    return state
  }
}
