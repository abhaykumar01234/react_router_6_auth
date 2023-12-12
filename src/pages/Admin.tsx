import { useAuth } from "~/context/useAuth";

export const Admin = () => {
  const { token } = useAuth();
  return (
    <div>
      <h2>Admin (Protected)</h2>
      <p>Authenticated as {token}</p>
    </div>
  );
};
