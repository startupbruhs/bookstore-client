import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Header, Nav } from "../components";
import { options } from "../configs/routes";
import loadable from "@loadable/component";
import { Layout } from "antd";
import React, { useState } from "react";

const { Content } = Layout;
const Home = loadable(() => import("./Home"), options);
const About = loadable(() => import("./About"), options);
const Contact = loadable(() => import("./Contact"), options);

export default () => {
  const [theme, setTheme] = useState("dark");

  const changeTheme = value => {
    const theme = value ? "dark" : "light";
    setTheme(theme);
  };

  return (
    <Router>
      <Layout>
        <Header theme={theme} changeTheme={changeTheme} />
        <Layout>
          <Nav
            theme={theme}
            changeTheme={changeTheme}
            links={[
              {
                path: "/",
                name: "Home"
              },
              {
                path: "/contact",
                name: "Contact"
              },
              {
                path: "/about",
                name: "About"
              }
            ]}
          />
          <Layout style={{ padding: "0 24px 24px" }}>
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
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
};
