import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import Cards from "../pages/Cards";

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/cards" component={Cards} />
    </Switch>
  );
}