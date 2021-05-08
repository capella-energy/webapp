import React from "react";

import Signup from "./pages/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Dashboard from "./pages/Dashboard";
import Marketplace from "./pages/Marketplace";
import Login from "./pages/Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./pages/ForgotPassword";
import UpdateProfile from "./pages/UpdateProfile";
import Learn from "./pages/Learn";

function Nav() {
  return (
    <HashRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/learn" component={Learn} />
          <PrivateRoute path="/marketplace" component={Marketplace} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />

          <Container className="login-container">
            <div className="inner-container">
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
            </div>
          </Container>
        </Switch>
      </AuthProvider>
    </HashRouter>
  );
}

export default Nav;
