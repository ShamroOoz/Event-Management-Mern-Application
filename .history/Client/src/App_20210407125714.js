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
        <Route exact key="/profile" path="/profile">
          <UserProfile />
        </Route>
        <PublicRoute exact key="singup" path="/singup">
          <Form />
        </PublicRoute>
        <PublicRoute exact key="login" path="/login">
          <Form />
        </PublicRoute>
        <PublicRoute exact key="forgot-password" path="/forgot-password">
          <Form />
        </PublicRoute>
        <PublicRoute exact key="password-rese" path="/password-reset">
          <Form />
        </PublicRoute>
        <Route path="*" key="lostpage">
          <LostPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
