import React, { Component } from 'react';
import wangeditor from "wangeditor";
class Orders extends Component {
  render() {
    return (
      <div>
        <div ref="editor"></div>
        <button onClick={this.handleGet.bind(this)}>获取文本</button>
      </div>
    );
  }
  componentDidMount(){
    this.editor2 = new wangeditor(this.refs.editor);
    this.editor2.create();
  }
  handleGet(){
    console.log( this.editor2.txt.html())
  }
}

export default Orders;
