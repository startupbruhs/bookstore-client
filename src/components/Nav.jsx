import React, { useState } from "react";
import { Menu, Switch } from "antd";
import { Link } from "react-router-dom";

const Nav = props => {
  const [theme, setTheme] = useState("dark");
  const [current, setCurrent] = useState("1");

  const changeTheme = value => {
    const theme = value ? "dark" : "light";
    setTheme(theme);
  };

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
    <div>
      <Switch
        checked={theme === "dark"}
        onChange={changeTheme}
        checkedChildren="Dark"
        unCheckedChildren="Light"
      />
      <br />
      <br />
      <Menu
        theme={theme}
        onClick={handleClick}
        style={{ width: 256 }}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[current]}
        mode="inline"
      >
        {menus}
      </Menu>
    </div>
  );
};

export default Nav;
