import React, { useState, useEffect } from "react";
import { Menu, Layout } from "antd";
import { menu } from "./utils";
import { Switch, useLocation } from "react-router-dom";

const { Sider } = Layout;

export const Nav = ({ theme, links }) => {
  const [current, setCurrent] = useState("0");

  const handleClick = e => {
    setCurrent(e.key);
  };

  let location = useLocation();

  useEffect(() => {
    setCurrent(links.findIndex(i => location.pathname === i.path).toString());
  }, []);

  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        theme={theme}
        defaultSelectedKeys={[current]}
        onClick={handleClick}
        style={{ height: "100%", borderRight: 0 }}
        defaultOpenKeys={[current]}
        selectedKeys={[current]}
        mode="inline"
      >
        {menu(links)}
      </Menu>
    </Sider>
  );
};
