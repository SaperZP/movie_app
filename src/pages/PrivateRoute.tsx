import { useContext } from "react";
import { AuthContext } from "../context";
import { Outlet, Navigate } from "react-router-dom";
import { toast } from "react-toastify";

const PrivateRoute = () => {
  const user = useContext(AuthContext);

  if (!user) {
    toast.error("To see movie details you need to log in!");
  }
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};
export default PrivateRoute;
