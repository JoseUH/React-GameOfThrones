import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export default function RequireAuth({ children, authenticated }) {
 
  let location = useLocation();

  if (!authenticated) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
