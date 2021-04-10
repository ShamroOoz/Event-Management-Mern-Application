import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Form, Home, LostPage } from "./Components";

const App = () => {
  return (
    <Router>
      <Switch>
        <div>
          <NavBar />
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/singup">
            <Form />
          </Route>
          <Route path="/login">
            <Form />
          </Route>
        </div>
        <Route path="*">
          <LostPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
