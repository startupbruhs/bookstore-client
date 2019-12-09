import React from "react";
import { Menu, Icon } from "antd";

export const menu = (links, type = "sidebar", history) =>
  links.map(link => (
    <Menu.Item key={link.key} onClick={() => history.push(link.path)}>
      {link.icon && type === "sidebar" && <Icon type={link.icon} />}
      <span>{link.name}</span>
    </Menu.Item>
  ));
