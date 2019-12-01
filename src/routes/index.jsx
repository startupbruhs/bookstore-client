import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import Loading from "./Loading";

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
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <hr />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </div>
  </Router>
);
