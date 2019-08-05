import React, { Component } from 'react';
import ModelForm from "@components/modelForm"
import { Modal} from 'antd';
class ModelCom extends Component {
  state = {
    visible: false,
    record:{}
  };
  showModal = (record) => {
    this.setState({
      visible: true,
      record
    });
  };
  handleCancel = e => {
    this.setState({
      visible: false,
    });
  };
  render() {
      const { visible,record } = this.state;
    return (
      <div>
        <Modal
          title="修改配件信息"
          visible={visible}
          onCancel={this.handleCancel}
          footer={null}
        >
        <p><ModelForm record={record}/></p>
        </Modal>

      </div>
    );
  }
  
}

export default ModelCom;
