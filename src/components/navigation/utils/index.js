import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

export const menu = (links, type = "sidebar") =>
  links.map(link => (
    <Menu.Item key={link.key}>
      {link.icon && type === "sidebar" && <Icon type={link.icon} />}
      <span>
        <Link to={link.path}> {link.name}</Link>
      </span>
    </Menu.Item>
  ));
