import React from "react";
import { Menu, Layout, Switch } from "antd";
const { Header: AntHeader } = Layout;

export const Header = ({ theme, changeTheme }) => (
  <AntHeader className="header">
    <div className="logo" />
    <Menu
      theme="dark"
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px" }}
    >
      <Menu.Item key="1">nav 1</Menu.Item>
      <Menu.Item key="2">nav 2</Menu.Item>
      <Menu.Item key="3">nav 3</Menu.Item>
      <Menu.Item key="4">
        <Switch
          checked={theme === "dark"}
          onChange={changeTheme}
          checkedChildren="Dark"
          unCheckedChildren="Light"
        />
      </Menu.Item>
    </Menu>
  </AntHeader>
);
