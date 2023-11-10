import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoutes({ addUser, children }) {
  if (addUser) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default ProtectedRoutes;
