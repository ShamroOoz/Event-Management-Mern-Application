import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavBar, Form, Home, LostPage, UserProfile } from "./Components";
import { PublicRoute, ProtectedRoute } from "./Components/Helper/Routes";
const App = () => {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <ProtectedRoute path="/profile">
          <UserProfile />
        </ProtectedRoute>
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
