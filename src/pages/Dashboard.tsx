import { useAuth } from "~/context/useAuth";

export const Dashboard = () => {
  const { token } = useAuth();
  return (
    <div>
      <h2>Dashboard (Protected)</h2>
      <p>Authenticated as {token}</p>
    </div>
  );
};
