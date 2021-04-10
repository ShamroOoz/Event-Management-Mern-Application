import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Form, Home, LostPage, UserProfile } from "./Components";
import { PublicRoute } from "./Components/Helper/Routes";
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
        <PublicRoute path="/singup">
          <Form />
        </PublicRoute>
        <PublicRoute path="/login">
          <Form />
        </PublicRoute>
        <PublicRoute path="/forgot-password">
          <Form />
        </PublicRoute>
        <PublicRoute path="/password-reset/:id">
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
