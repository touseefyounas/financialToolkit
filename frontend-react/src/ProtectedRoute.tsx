
import { ReactElement, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactElement;
  }

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({children}): JSX.Element | null => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:8080/auth", {
          credentials: "include",
        });
        if (response.ok) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuth();
    console.log("Authentication Status: ", isAuthenticated);
  }, [isAuthenticated, setIsAuthenticated]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
