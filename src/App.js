import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

import React from "react";
import { AddUser } from "./feactures/users/AddUser";
import { EditUser } from "./feactures/users/EditUser";
import { UserList } from "./feactures/users/UserList";

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/add-user" component={AddUser} exact />
          <Route path="/edit-user" component={EditUser} exact />
          <Route path="/" component={UserList} exact />
        </Switch>
      </div>
    </Router>
  );
}
