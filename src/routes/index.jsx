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
const Books = loadable(() => import("./Books"), options);
const Contact = loadable(() => import("./Contact"), options);
const Booking = loadable(() => import("./Booking"), options);
const Book = loadable(() => import("./Book"), options);
const Profile = loadable(() => import("./Profile"), options);

export default withStorage(({ ls }) => {
  const [theme, setTheme] = useState(ls.getItem("theme"));
  const [selectedKey, setKey] = useState(undefined);

  const changeTheme = value => {
    const theme = value ? "dark" : "light";
    setTheme(theme);
    ls.setItem("theme", theme);
  };

  const onClick = key => {
    setKey(key);
  };

  return (
    <Router>
      <Layout>
        <Header
          selectedKey={selectedKey}
          onClick={onClick}
          links={routes}
          theme={theme}
          changeTheme={changeTheme}
        />
        <Layout>
          <Nav
            selectedKey={selectedKey}
            onClick={onClick}
            theme={theme}
            changeTheme={changeTheme}
            links={routes}
          />
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
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/about">
                  <About />
                </Route>
                <Route exact path="/contact">
                  <Contact />
                </Route>
                <Route exact path="/books">
                  <Books />
                </Route>
                <Route exact path="/booking">
                  <Booking />
                </Route>
                <Route exact path="/book/:id">
                  <Book />
                </Route>
                <Route exact path="/profile">
                  <Profile />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
});
