import React, { Component } from 'react';
import { Select } from 'antd';
const { Option } = Select;
class SelectStatus extends Component {
  render() {
    let {value} = this.props;
    return (
      <Select
      value={value}
      showSearch
      style={{ width: 200 }}
      onChange={this.onChange.bind(this)}
    >
      <Option value="售罄">售罄</Option>
      <Option value="有货">有货</Option>
    </Select>
    )
  }
  onChange(val){
this.props.onChange(val)
  }
}

export default SelectStatus;
