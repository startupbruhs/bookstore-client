import React from "react";
import { menu } from "./utils";
import { Menu, Layout, Switch } from "antd";
import { logo } from "../../assets/images";
import { useLocation } from "react-router-dom";
import { activeRoute } from "../../utils/navigation";

const { Header: AntHeader } = Layout;

export const Header = ({ theme, changeTheme, selectedKey, onClick, links }) => {
  const current = activeRoute(links, useLocation().pathname);

  return (
    <AntHeader className={"header " + theme}>
      <div className="logo">
        <img src={logo} width="120" alt="logo" />
      </div>
      <Menu
        theme={theme}
        mode="horizontal"
        onClick={e => {
          onClick(e.key);
        }}
        defaultSelectedKeys={[current]}
        selectedKeys={[selectedKey || current]}
        style={{ lineHeight: "64px", float: "right" }}
      >
        {menu(links, "header")}
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
};
