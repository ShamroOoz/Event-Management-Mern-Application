import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Form, Home } from "./Components";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/singup" exact>
          <Form />
        </Route>
        <Route path="/login" exact>
          <Form />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
