import React from "react"
import PureRenderMixin from "react-addons-pure-render-mixin"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import HeaderTest from "../components/header"
import * as homeActions from "../actions/home"

import { Table } from "antd"

const { Column } = Table

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
    this.state = {
      loading: false,
      hasMore: true,
    }
  }
  componentDidMount() {
    this.props.homeActions.getAllUsers({}, (data) => {
      this.props.homeActions.userInfoState({data: data})
    })
  }

  render() {
    return (
      <div>
        <HeaderTest defaultSelectedKeys="1"/>
        <Table dataSource={this.props.userInfoState.data}>
          <Column
            title="userName"
            dataIndex="userName"
            key="userName"
          />
          <Column
            title="Password"
            dataIndex="password"
            key="password"
          />
          <Column
            title="createTime"
            dataIndex="create_time"
            key="create_time"
          />
          <Column
            title="Id"
            dataIndex="_id"
            key="_id"
          />
        </Table>
      </div>

    )
  }
}

const mapStateToProps = state => {
  return { ...state }
}

function mapDispatchToProps(dispatch) {
  return {
    homeActions: bindActionCreators({...homeActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)

