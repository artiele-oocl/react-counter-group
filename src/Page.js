import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import CounterGroup from './components/CounterGroup/CounterGroup';
import Counter from './components/Counter/Counter'

export default () => {
  return (
    <Router>
      <div>
        <div>
            <Link to="/">Counter</Link> | <Link to="/CounterGroup">CounterGroup</Link>
        </div>
        <hr />
        <Switch>
          <Route exact path="/">
            <CounterPage />
          </Route>
          <Route path="/CounterGroup">
            <CounterGroupPage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function CounterPage() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

function CounterGroupPage() {
  return (
    <div>
      <CounterGroup defaultCounts={3}/>
    </div>
  );
}