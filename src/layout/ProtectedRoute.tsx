import { Navigate, useLocation, Outlet } from "react-router-dom";
import { useAuth } from "~/context/useAuth";

export const ProtectedRoute = () => {
  const { token } = useAuth();
  const location = useLocation();

  if (!token)
    return <Navigate to="/login" replace state={{ from: location }} />;

  return <Outlet />;
};
