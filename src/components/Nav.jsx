import React, { useState } from "react";
import { Menu, Layout } from "antd";
import { Link } from "react-router-dom";
const { Sider } = Layout;

export const Nav = props => {
  const [current, setCurrent] = useState("1");

  const handleClick = e => {
    console.log("click ", e);

    setCurrent(e.key);
  };

  const menus = props.links.map((link, index) => {
    return (
      <Menu.Item key={index}>
        <Link to={link.path}> {link.name}</Link>
      </Menu.Item>
    );
  });

  return (
    <Sider width={200} style={{ background: "#fff" }}>
      <Menu
        theme={props.theme}
        defaultSelectedKeys={["1"]}
        onClick={handleClick}
        style={{ height: "100%", borderRight: 0 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
      >
        {menus}
      </Menu>
    </Sider>
  );
};
