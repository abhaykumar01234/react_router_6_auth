import { NavLink } from "react-router-dom";
import { useAuth } from "~/context/useAuth";

export const Navigation = () => {
  const { token, handleLogout } = useAuth();

  return (
    <nav>
      {token ? (
        <>
          <NavLink to="/">Dashboard</NavLink>
          <NavLink to="/admin">Admin</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
      <NavLink to="/about">About</NavLink>
      {token ? <button onClick={handleLogout}>Logout</button> : <></>}
    </nav>
  );
};
