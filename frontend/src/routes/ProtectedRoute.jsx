import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user || !user.isLogin) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
