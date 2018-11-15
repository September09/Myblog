/**
 * Created by september on 2018/6/1.
 */


import React, { Component } from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { bindActionCreators } from "redux"
import { Form, Icon, Input, Button, Checkbox, message } from "antd"
import { connect } from "react-redux"
import "../style/common.scss"
import "../style/register.scss"
import * as loginActions from "../actions/login"

const FormItem = Form.Item
export class Register extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  componentDidMount() {

  }
  shouldComponentUpdate(nextProps) {
    // 登录完成,切成功登录
    // console.log("nextState:", nextProps)
    if (nextProps.status === "登陆成功" && nextProps.isSuccess) {
      this.props.navigation.dispatch(resetAction)
      return false
    }
    return true
  }
  render() {
    return (
      <div className="loginWrapper">
        <div className="title">注册</div>
        <Form className="login-form">
          <FormItem>
            <Input prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />} placeholder="Username"
              onChange={ (e) => {this.changeHandle("userName", e.target.value) } }
            />
          </FormItem>
          <FormItem>
            <Input prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />} type="password" placeholder="Password"
              onChange={ (e) => {this.changeHandle("password", e.target.value) } }
            />
          </FormItem>
          <FormItem>
            <Checkbox>Remember me</Checkbox>
            <a className="login-form-forgot" href="">Forgot password</a>
            <Button type="primary" htmlType="submit" className="login-form-button" onClick={ this.clickHandle.bind(this) }>
              {this.props.register.registerStatus}
            </Button>
            Or <a href="#/login">login now!</a>
          </FormItem>
        </Form>
      </div>
    )
  }
  changeHandle(changeName, changeValue) {
    const changeObj = {}
    changeObj[changeName] = changeValue
    console.log(" changeObj", changeObj)
    this.props.loginActions.updateBindMobileState(changeObj)
  }

  clickHandle() {
    const {userName, password} = this.props.changeInput
    console.log("this.props.changeInput: ", this.props.changeInput)
    this.props.loginActions.register({userName, password}, () => {
      message.success("login success, please login!")
      // localStorage.setItem("token", result.token)
      // this.props.loginActions.loginIn({user: result.userName})
      setTimeout(() => {
        this.props.history.push("/login")
      }, 2000)
    })
  }
}

const mapStateToProps = state => {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {
    loginActions: bindActionCreators({...loginActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register)


