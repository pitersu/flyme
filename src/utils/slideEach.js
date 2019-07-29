import React from "react"
import { Menu, Icon } from 'antd';
const { SubMenu } = Menu;
export default (slideTabBars) => slideTabBars.map((item, index) => {
  let fn = (children) => {
    if (children) {
      return <SubMenu key={item.key} title={
        <span>
          <Icon type="setting" />
          <span>{item.name}</span>
        </span>
      }
      >
        {
          item.children.map((child) => {
            return <Menu.Item key={child.key} >{child.name}</Menu.Item>
          })
        }
      </SubMenu>
    }
  }
  if (item.children) {
    return fn(item.children)
  } else {
    return <Menu.Item key={item.key}>
      <Icon type="android" />
      <span>{item.name}</span>
    </Menu.Item>
  }
})