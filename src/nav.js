import React from "react";

import Signup from "./pages/Login/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import { HashRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Marketplace from "./pages/Marketplace/Marketplace";
import Login from "./pages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import ForgotPassword from "./pages/Login/ForgotPassword";
import UpdateProfile from "./pages/Login/UpdateProfile";
import Learn from "./pages/Learn/Learn";
import Properties from "./pages/Survey/Properties";
import UtilityData from "./pages/Survey/UtilityData";
import Dashboard from "./pages/Dashboard";
import Completion from "./pages/Survey/Completion";
import ProjectDetails from "./pages/Marketplace/ProjectDetails";
import ComingSoon from "./pages/Survey/ComingSoon";

function Nav() {
  return (
    <HashRouter>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/" component={Dashboard} />
          <PrivateRoute path="/learn" component={Learn} />
          <PrivateRoute path="/marketplace/:id" component={ProjectDetails} />
          <PrivateRoute path="/marketplace" component={Marketplace} />

          <Container className="login-container">
            <div className="inner-container">
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot-password" component={ForgotPassword} />
              <PrivateRoute path="/properties" component={Properties} />
              <PrivateRoute path="/comingsoon" component={ComingSoon} />
              <PrivateRoute path="/connect-utility" component={UtilityData} />
              <PrivateRoute path="/complete" component={Completion} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
            </div>
          </Container>
        </Switch>
      </AuthProvider>
    </HashRouter>
  );
}

export default Nav;
