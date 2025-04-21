import { useIsAuthenticated } from "@refinedev/core";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const { isSuccess } = useIsAuthenticated();

  if (!isSuccess) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
