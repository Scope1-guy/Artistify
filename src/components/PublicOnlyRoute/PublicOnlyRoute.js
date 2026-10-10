import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import LoadingState from "../LoadingState/LoadingState";

function PublicOnlyRoute({ children }) {
  const { currentUser, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <LoadingState message="Loading..." />;
  if (currentUser) {
    const destination = location.state?.from?.pathname || "/";
    return <Navigate to={destination} replace />;
  }

  return children;
}

export default PublicOnlyRoute;
