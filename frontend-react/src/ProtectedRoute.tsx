
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
        const response = await fetch("/auth/check", {
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
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
