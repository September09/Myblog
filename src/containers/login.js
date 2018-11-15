/**
 * Created by september on 2018/6/1.
 */
import React, { Component } from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { Form, Icon, Input, Button, Checkbox, message } from "antd"
const FormItem = Form.Item
import "../style/common.scss"
import "../style/register.scss"
import * as loginActions from "../actions/login"


export class Login extends Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  componentDidMount() {

  }
  shouldComponentUpdate(nextProps) {
    if (nextProps.status === "登陆成功" && nextProps.isSuccess) {
      this.props.navigation.dispatch(resetAction)
      return false
    }
    return true
  }
  render() {
    console.log("1111", this.props)
    return (
      <div className="loginWrapper">
        <div className="title">登录</div>
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
              {this.props.loginIn.loginStatus}
            </Button>
            Or <a href="#/register">register now!</a>
          </FormItem>
        </Form>
      </div>
    )
  }
  changeHandle(changeName, changeValue) {
    const changeObj = {}
    changeObj[changeName] = changeValue
    this.props.loginActions.updateBindMobileState(changeObj)
  }

  clickHandle() {
    const {userName, password} = this.props.changeInput
    this.props.loginActions.login({userName, password}, (result) => {
      message.success("login success")
      localStorage.setItem("token", result.token)
      this.props.loginActions.loginIn({user: result.userName})
      setTimeout(() => {
        this.props.history.push("/home")
      }, 1000)
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
