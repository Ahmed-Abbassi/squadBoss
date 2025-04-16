
import { Navigate, Outlet } from "react-router";
import { useAuth } from "../authContext/AuthContext";

const ProtectedLayout = () => {
  const { isAuthenticated } = useAuth();

  console.log("is auth : ", isAuthenticated);
  
  if (!isAuthenticated) {

    return <Navigate to="/login" />;
  }

  return (
    <div>
        <Outlet />
    </div>
  );
};

export default ProtectedLayout;
