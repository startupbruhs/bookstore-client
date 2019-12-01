import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { options } from "../configs/routes";
import loadable from "@loadable/component";
import Nav from "../components/Nav";
import React from "react";

const Home = loadable(() => import("./Home"), options);
const About = loadable(() => import("./About"), options);
const Contact = loadable(() => import("./Contact"), options);

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
