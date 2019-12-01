import React from "react";
import { Spin, Icon } from "antd";

const antIcon = <Icon type="loading" style={{ fontSize: 70 }} spin />;

export default () => (
  <div className="loader">
    <Spin size="large" indicator={antIcon} />
  </div>
);
