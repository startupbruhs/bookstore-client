import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Nav } from "../components";
import { options } from "../configs/routes";
import loadable from "@loadable/component";
import { Layout } from "antd";
import React, { useState } from "react";
import routes from "./navigation";
import { withStorage } from "../utils/storage/withStorage";

const { Content } = Layout;
const Home = loadable(() => import("./Home"), options);
const About = loadable(() => import("./About"), options);
const Contact = loadable(() => import("./Contact"), options);
const Books = loadable(() => import("./Books"), options);

export default withStorage(({ ls }) => {
  const [theme, setTheme] = useState(ls.getItem("theme"));

  const changeTheme = value => {
    const theme = value ? "dark" : "light";
    setTheme(theme);
    ls.setItem("theme", theme);
  };

  return (
    <Router>
      <Layout>
        <Header links={routes} theme={theme} changeTheme={changeTheme} />
        <Layout>
          <Nav theme={theme} changeTheme={changeTheme} links={routes} />
          <Layout style={{ padding: "24px 24px" }}>
            <Content
              style={{
                background: "#fff",
                padding: 24,
                margin: 0,
                minHeight: 280
              }}
            >
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/books" component={Books} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
});
