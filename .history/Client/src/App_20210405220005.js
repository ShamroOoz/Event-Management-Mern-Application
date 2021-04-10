import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Form, Home, LostPage, UserProfile } from "./Components";
import PublicRoute from "./Components/Helper/PublicRoute";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <PublicRoute path="/" exact>
          <Home />
        </PublicRoute>
        <Route path="/profile">
          <UserProfile />
        </Route>
        <PublicRoute path="/singup">
          <Form />
        </PublicRoute>
        <PublicRoute path="/login">
          <Form />
        </PublicRoute>
        <Route path="*">
          <LostPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
