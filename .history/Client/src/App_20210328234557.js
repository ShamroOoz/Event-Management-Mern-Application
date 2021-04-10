import { BrowserRouter as Router, Route } from "react-router-dom";

import { NavBar, Form } from "./Components";

const App = () => {
  return (
    <Router>
      <NavBar />
      <Route path="/singup" exact>
        <Form />
      </Route>
      <Route path="/login" exact>
        <Form />
      </Route>
    </Router>
  );
};

export default App;
