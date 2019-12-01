import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { menu } from "./utils";
import { activeRoute } from "../../utils/navigation";
import { useLocation } from "react-router-dom";
const { Sider } = Layout;

export const Nav = ({ theme, links }) => {
  const defaultKey = activeRoute(links, useLocation().pathname);

  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        theme={theme}
        defaultSelectedKeys={[defaultKey]}
        style={{ height: "100%", borderRight: 0 }}
        mode="inline"
      >
        {menu(links)}
      </Menu>
    </Sider>
  );
};
