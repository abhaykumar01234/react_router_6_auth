import "~/styles/global.css";
import { BrowserRouter as Router } from "react-router-dom";

import { Navigation } from "./Navigation";
// import { Routes } from "./Routes";
import { RoutesJsx } from "./Routes2";

import { AuthProvider } from "~/context/useAuth";

export const Layout = () => {
  return (
    <Router>
      <AuthProvider>
        <h1>React Router</h1>
        <Navigation />
        <br />
        <RoutesJsx />
      </AuthProvider>
    </Router>
  );
};
