import { Navigate } from "react-router";
import { useAuth } from "../store/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/sign-in" replace />;

  return children;
};

export default ProtectedRoute;
