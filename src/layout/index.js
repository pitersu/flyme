import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import sliderEach from "@utils/slideEach"
import { layoutRouteComponent } from "@router"
import {withRouter} from "react-router-dom"
import {Logo} from "./style"
// import sliderTabBar from "@components/sliderTabBar"
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;
const sliderTabBar = sliderEach(layoutRouteComponent);
 class LayoutCom extends Component {
  render() {
    return (
      <Layout>
        <Sider
          style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
          }}
        >
          <Logo >
            <img src="flyme.png" alt="logo"/>
   
          </Logo>
          <Menu
            style={{ width: 256 }}
            onClick={this.handleTo.bind(this)}
            mode="inline"
            theme="dark"
          >
            {

              sliderTabBar
            }
          </Menu>
        </Sider>
        <Layout style={{ marginLeft: 200 }}>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )

  }
  handleTo({key}) {
    this.props.history.push(key)
  }
}

export default withRouter(LayoutCom);