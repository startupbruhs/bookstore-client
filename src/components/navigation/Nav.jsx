import React from "react";
import { Menu, Layout } from "antd";
import { menu } from "./utils";
import { activeRoute } from "../../utils/navigation";
import { useLocation, useHistory } from "react-router-dom";

const { Sider } = Layout;

export const Nav = ({ theme, links, onClick, selectedKey }) => {
  const current = activeRoute(links, useLocation().pathname);
  const history = useHistory();

  return (
    <Sider
      breakpoint={{ sm: 2 }}
      collapsible
      width={200}
      style={{ background: "#fff" }}
    >
      <Menu
        theme={theme}
        defaultSelectedKeys={[current]}
        onClick={e => {
          onClick(e.key);
        }}
        selectedKeys={[selectedKey || current]}
        style={{ height: "100%", borderRight: 0 }}
        mode="inline"
      >
        {menu(links, "sidebar", history)}
      </Menu>
    </Sider>
  );
};
