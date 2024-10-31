import { Navigate } from "react-router-dom";
import React from 'react';

const ProtectedRoute = ({ element }) => {
    const token = localStorage.getItem("token"); // Check if the token exists

    return token ? element : <Navigate to="/login" />; // Redirect to login if not authenticated
};

export default ProtectedRoute;