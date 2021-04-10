import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Form, Home, LostPage, UserProfile } from "./Components";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <Route path="/singup">
          <Form />
        </Route>
        <Route path="/login">
          <Form />
        </Route>
        <Route path="*">
          <LostPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
