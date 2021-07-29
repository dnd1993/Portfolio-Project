import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Projects } from "./components/Projects";
import { Learning } from "./components/Learning";
import { Contact } from "./components/Contact";
import { Error } from "./components/Error";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/learning-path" component={Learning} />
          <Route path="/contact" component={Contact} />
          <Route path="*" component={Error} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
