import React, { Component } from 'react';
import SelectStatus from "../select"
import CheckboxCom from "../checkBox"
import { Form, Icon, Input, Button } from 'antd';
class ModelForm extends Component {
  componentDidMount() {
    this.props.form.validateFields();
  }
//当你点击提交的时候回自动进行校验 获取到表单中的数据
  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values);
      }
    });
  };
  render() {
    let {partName,partAuth,partStatus,partType,partPrice} =this.props.record
    const { getFieldDecorator, getFieldError, isFieldTouched } = this.props.form;
    // Only show error after a field is touched.
    const usernameError = isFieldTouched('partName') && getFieldError('partName');
    const passwordError = isFieldTouched('partAuth') && getFieldError('partAuth');
    return (
      <Form layout="horizontal" onSubmit={this.handleSubmit}>
    
      <Form.Item 
       label="配件名称"
      validateStatus={usernameError ? 'error' : ''} help={usernameError || ''}>
        {getFieldDecorator('partName', {
          //表单的校验
          rules: [
            // { required: true, message: 'Please input your partName!' },
            //自定义校验规则 ，后面必须跟一个函数
            {validator:this.handlevalidator},
           
          ],
          initialValue:partName
        })(
          <Input
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder="请输入配件名称"
          />,
        )}
      </Form.Item>
      <Form.Item 
      label="配件描述"
      validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
        {getFieldDecorator('partAuth', {
          rules: [{  message: 'Please input your partAuth!' }],
          initialValue:partAuth
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="test"
            placeholder="请输入配件描述"
          />,
        )}
      </Form.Item>
      
      <Form.Item 
      label="配件状态"
      validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
        {getFieldDecorator('partStatus',{
             rules:[{required:true}],
             initialValue:partStatus
        }) (
         <SelectStatus/>
        )}
      </Form.Item>

      <Form.Item 
      label="配件类型"
      validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
        {getFieldDecorator('partType',{
           initialValue:partType
        }) (
         <CheckboxCom />
        )}
      </Form.Item>
         
      <Form.Item 
      label="配件价格"
      validateStatus={passwordError ? 'error' : ''} help={passwordError || ''}>
        {getFieldDecorator('partPrice', {
          rules: [{ required: true, message: 'Please input your partPrice!' }],
          initialValue:partPrice
        })(
          <Input
            prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type="test"
            placeholder="请输入配件价格"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          修改信息
        </Button>
      </Form.Item>
    </Form>
    );
  }
  handlevalidator(rule,value,callback){
       if(!value){
         callback("配件的名称是必须填的")
       }else{
         callback();
       }
  }
}


const WrappedHorizontalLoginForm = Form.create({ name: 'horizontal_login' })(ModelForm);

export default WrappedHorizontalLoginForm
