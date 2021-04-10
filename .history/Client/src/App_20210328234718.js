import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Form } from "./Components";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
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
