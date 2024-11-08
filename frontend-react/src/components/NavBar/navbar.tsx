import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";

interface NavBarProps {
  isAuthenticated: boolean | null;
  setIsAuthenticated: Dispatch<SetStateAction<boolean | null>>;
}

const NavBar: React.FC<NavBarProps> = ({
  isAuthenticated,
  setIsAuthenticated,
}) => {
  const [userId, setUserId] = useState<string | null>(null);
  const handleLogout = async () => {
    const response = await fetch("http://localhost:8080/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
    if (response.ok) {
      setIsAuthenticated(false);
      console.log("LogOut Call: ", response);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch("http://localhost:8080/auth", {
          credentials: "include",
        });
        if (response.ok) {
          const data = await response.json();
          setUserId(data.userId);
          console.log(data.userId);
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

  return (
    <>
      <div className="w-5/6 mx-auto h-20 bg-secondary m-2 rounded-full">
        <div className="flex h-20 items-center justify-between">
          <Link to="/">
            <h1 className="text-xl text-text mx-8">Financial ToolKit</h1>
          </Link>

          <div className="mx-4">
            {isAuthenticated ? (
              <>
                <Link to="/update" state={{ userId }}>
                  <button className="text-text bg-accent mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-primary">
                    Edit Profile
                  </button>
                </Link>
                <Link to="/">
                  <button
                    onClick={handleLogout}
                    className="text-text bg-primary mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-accent"
                  >
                    Logout
                  </button>
                </Link>
              </>
            ) : (
              <>
                <Link to="register">
                  <button className="text-text bg-accent mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-primary">
                    Register
                  </button>
                </Link>
                <Link to="login">
                  <button className="text-text bg-primary mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-accent">
                    Login
                  </button>
                </Link>
              </>
            )}
            {/* <Link to='register'>
                    <button className="text-text bg-accent mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-primary">Register</button>
                    </Link>
                    <Link to='login'>
                    <button className="text-text bg-primary mr-4 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-accent">Login</button>
                    </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
