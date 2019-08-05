import React, { Component,Fragment } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import {LoginWrapper,Copyt} from "./style"
import {LoginAsyncAction} from "@actions/actionCreator"
import store from "@store";
class Login extends Component {
  constructor(){
    super()
    this.state = store.getState();
    store.subscribe(this.handleUpdate.bind(this))
    
  }
  handleUpdate(){
    this.setState(store.getState());
}
componentDidUpdate(oldProps,oldState){
  if(oldState.user.token  !== this.state.user.token){
    this.props.history.push("/home");
  }
}
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields(async(err, values) => {
      if (!err) {
        // let data = await login(values);
        // console.log(data)
      store.dispatch(LoginAsyncAction(values));
     
      }
    });
  };
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Fragment>
  <LoginWrapper>
<Form onSubmit={this.handleSubmit} style={{width:'500px','border-radius':'20px',background:'#fff'}} className="login-form" wrapperCol={{sm:{span:20}}} labelCol={{sm:{span:4}}}>
        {/* 用户名 */}
      <Form.Item
      label="用户名" style={{ width:'400px' ,'text-align':'center' ,marginLeft: '40px' ,marginTop: '20px'}}
      >
        {getFieldDecorator('username', {
          rules: [{ required: true, message: 'Please input your username!' }],
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="Username"
          />,
        )}
      </Form.Item>
      {/* 密码 */}
      <Form.Item
        label="密码" style={{ width:'400px' ,'text-align':'center',marginLeft: '40px'}}
      >
        {getFieldDecorator('password', {
          rules: [{ required: true, message: 'Please input your Password!' }],
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item style={{ width:'400px' ,'text-align':'center',marginLeft: '40px'}}>
        <Button type="primary" htmlType="submit" className="login-form-button">
         登录 
        </Button>
      </Form.Item>
    </Form>
  </LoginWrapper>
     <Copyt>©2019 Meizu Telecom Equipment Co., Ltd. All rights reserved.备案号: 粤ICP备13003602号-4经营许可证编号: 粤B2-20130198营业执照粤公网安备 44049102496076号</Copyt>
     </Fragment>
    );
  }
}

const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);

export default  WrappedNormalLoginForm