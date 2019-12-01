import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export const menu = links =>
  links.map((link, index) => (
    <Menu.Item key={index}>
      <Link to={link.path}> {link.name}</Link>
    </Menu.Item>
  ));
