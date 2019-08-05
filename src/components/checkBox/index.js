import React, { Component } from 'react';
import { Checkbox } from 'antd';

class CheckboxCom extends Component {
  constructor(){
        super();
        this.state = {
            plainOptions:['万能','石墨烯','大容量','便携','都市','快充','超轻','科幻']
        }
    }
  render() {
    let {value} = this.props;
    console.log(value)
    let {plainOptions} = this.state;
    return (
      <Checkbox.Group options={plainOptions} value={value} onChange={this.onChange.bind(this)}/>
    )
  }
  
  onChange(val){
    this.props.onChange(val)
  }
}

export default CheckboxCom;
