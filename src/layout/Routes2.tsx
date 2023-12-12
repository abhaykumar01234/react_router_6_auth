import { Routes, Route } from "react-router-dom";

import { Login } from "~/pages/Login";
import { Dashboard } from "~/pages/Dashboard";
import { NoMatch } from "~/pages/NoMatch";
import { About } from "~/pages/About";
import { Admin } from "~/pages/Admin";

import { ProtectedRoute } from "./ProtectedRoute";

export const RoutesJsx = () => (
  <Routes>
    <Route path="login" element={<Login />} />
    <Route path="about" element={<About />} />
    <Route path="/" element={<ProtectedRoute />}>
      <Route index element={<Dashboard />} />
      <Route path="admin" element={<Admin />} />
    </Route>

    <Route path="*" element={<NoMatch />} />
  </Routes>
);
