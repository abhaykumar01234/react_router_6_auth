import { Login } from "~/pages/Login";
import { Dashboard } from "~/pages/Dashboard";
import { NoMatch } from "~/pages/NoMatch";
import { About } from "~/pages/About";
import { Admin } from "~/pages/Admin";

import { ProtectedRoute } from "./ProtectedRoute";
import { useRoutes } from "react-router-dom";

export const Routes = () => {
  const routes = useRoutes([
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "about",
      element: <About />,
    },
    {
      path: "/",
      element: <ProtectedRoute />,
      children: [
        {
          path: "/",
          element: <Dashboard />,
        },
        {
          path: "admin",
          element: <Admin />,
        },
      ],
    },
    {
      path: "*",
      element: <NoMatch />,
    },
  ]);

  return routes;
};
