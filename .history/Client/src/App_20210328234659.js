import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { NavBar, Form } from "./Components";

const App = () => {
  return (
    <Router>
      <Switch>
        <NavBar />
        <Route path="/singup" exact>
          <Form />
        </Route>
        <Route path="/login" exact>
          <Form />
        </Route>
      </Router>
    </Switch>
  );
};

export default App;
