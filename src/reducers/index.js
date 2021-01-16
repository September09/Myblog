/**
 * Created by september on 2018/06/07.
 */

import loginIn from "./login"
import register from "./register"
import changeInput from "./changeInput"
import userInfoState from "./home"
import layoutData from "./layout"
import { combineReducers } from "redux"

const reducer = combineReducers({
  loginIn,
  register,
  changeInput,
  userInfoState,
  layoutData
})


export default reducer
