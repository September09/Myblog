/**
 * Created by september on 2018/7/11.
 */

import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { Layout } from "antd"
const { Footer } = Layout
import "../style/header.scss"

class FooterPlus extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }
  render() {
    return (
      <Footer style={{ textAlign: "center" }}>
                Ant Design ©2016 Created by Ant UED
      </Footer>
    )
  }
}

export default FooterPlus
