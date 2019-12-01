import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { menu } from "./utils";

const { Sider } = Layout;

export const Nav = ({ theme, links }) => {
  const [current, setCurrent] = useState("1");

  const handleClick = e => {
    setCurrent(e.key);
  };

  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        theme={theme}
        defaultSelectedKeys={["1"]}
        onClick={handleClick}
        style={{ height: "100%", borderRight: 0 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
      >
        {menu(links)}
      </Menu>
    </Sider>
  );
};
