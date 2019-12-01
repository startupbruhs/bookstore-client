import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import Loading from "./Loading";
import Nav from "../components/Nav";

const Home = loadable(() => import("./Home"), {
  fallback: <Loading />
});

const About = loadable(() => import("./About"), {
  fallback: <Loading />
});

const Contact = loadable(() => import("./Contact"), {
  fallback: <Loading />
});

export default () => (
  <Router>
    <Nav
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
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);
