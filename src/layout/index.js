import React, { Component } from 'react'
import { Layout, Menu,Dropdown, Icon,Button} from 'antd';
import sliderEach from "@utils/slideEach"
import { layoutRouteComponent } from "@router"
import {withRouter} from "react-router-dom"
import {Logo} from "./style"
import store from "@store"
import {LogoutAction} from "@actions/actionCreator"
// import sliderTabBar from "@components/sliderTabBar"
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

const sliderTabBar = sliderEach(layoutRouteComponent);
 class LayoutCom extends Component {
   constructor(){
     super();
     this.state = store.getState();
     store.subscribe(this.handleUserLogout.bind(this))
   }
   handleUserLogout(){
    this.setState(store.getState());
   }
   componentDidUpdate(oldProps,oldState){
    if(oldState.user.token  !== this.state.user.token){
    this.props.history.push("/login");
    }
  }
  handleLogout(){
    
    sessionStorage.removeItem("token");
    store.dispatch(LogoutAction())
  }
  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            个人资料
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            修改密码
          </a>
        </Menu.Item>
        <Menu.Item>
          <div onClick={this.handleLogout.bind(this)}>
            退出登录
          </div>
        </Menu.Item>
      </Menu>
    );
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
        <Header style={{ background: '#fff', padding: 0 ,display:'flex',justifyContent:'flex-end'}} >
        <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" href="#">
    <Button>
    admin <Icon type="down"/>
    </Button>
 
    </a>
  </Dropdown>

        </Header>
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
              {this.props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>flyme ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    )

  }
  handleTo({key}) {
    this.props.history.push(key)
  }
}

export default withRouter(LayoutCom);