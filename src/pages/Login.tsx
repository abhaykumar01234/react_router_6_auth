import { Navigate } from "react-router-dom";
import { useAuth } from "~/context/useAuth";

export const Login = () => {
  const { handleLogin, token } = useAuth();

  if (token) return <Navigate to="/" replace />;

  return (
    <div>
      <h2>Login (Public)</h2>

      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
};
