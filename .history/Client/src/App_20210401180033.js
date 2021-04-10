import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Form, Home, LostPage } from "./Components";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/profile" exact>
          <UserProfile />
        </Route>
        <Route path="/singup" exact>
          <Form />
        </Route>
        <Route path="/login" exact>
          <Form />
        </Route>
        <Route path="*" exact>
          <LostPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
