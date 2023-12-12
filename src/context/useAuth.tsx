import { createContext, useContext, type ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fakeAuth } from "~/utils";
import { useLocalStorage } from "~/utils/hooks/useLocalStorage";

type AuthContextType = {
  token: string | null;
  handleLogin: () => Promise<void>;
  handleLogout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  token: null,
  handleLogin: async () => {},
  handleLogout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useLocalStorage<string | null>("token", null);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogin = async () => {
    const token = await fakeAuth();

    setToken(token);
    const origin = location.state?.from?.pathname || "/";
    navigate(origin);
  };

  const handleLogout = () => {
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, handleLogin, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
