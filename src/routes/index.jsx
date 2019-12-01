import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import loadable from "@loadable/component";
import Loading from "./Loading.js";

const Home = loadable(() => import("./Home.js"), {
  fallback: <Loading />
});

const About = loadable(() => import("./About.js"), {
  fallback: <Loading />
});

const Contact = loadable(() => import("./Contact.js"), {
  fallback: <Loading />
});

export default function App() {
  return (
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
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contactn" component={Contact} />
        </Switch>
      </div>
    </Router>
  );
}
