import React from "react";
import { Menu, Layout, Switch } from "antd";
import { menu } from "./utils";
import { logo } from "../../assets/images";

const { Header: AntHeader } = Layout;

export const Header = ({ theme, changeTheme, links }) => (
  <AntHeader className={"header " + theme}>
    <img className="logo" src={logo} alt="logo" />

    <Menu
      theme={theme}
      mode="horizontal"
      defaultSelectedKeys={["2"]}
      style={{ lineHeight: "64px", float: "right" }}
    >
      {menu(links)}
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
