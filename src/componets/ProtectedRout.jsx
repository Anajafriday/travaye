import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../contexts/AuthProvider";

function ProtectedRout({ children }) {
  const { isAuthenticated } = useAuth();
  // const navigate = useNavigate();
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/");
  //   }
  // }, [navigate, isAuthenticated]);
  // return isAuthenticated ? children : null;
  return children;
}

export default ProtectedRout;
