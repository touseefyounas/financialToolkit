import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOutletContext } from 'react-router-dom';
import { Dispatch, SetStateAction } from "react";

const Login: React.FC = () => {

  const [isAuthenticated, setIsAuthenticated] = useOutletContext<[boolean | null, Dispatch<SetStateAction<boolean | null>>]>();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    try {
      const result = await axios.post(
        "http://localhost:8080/login",
        {
          email,
          password,
        },
        {
          withCredentials: true,
        }
      );
    
      console.log(result);
      if (result.status === 200) {
        setIsAuthenticated(true)
        navigate("/income-tax");
      }
    } catch (err) {
      setError("Error logging in user. Please try again");
    }
    
  };

  return (
    <>
      <div>
        <div className=" w-full m-4">
          <div className="w-5/6 sm:w-5/6 md:w-4/6 lg:w-3/6 xl:w-2/6 mx-auto mt-20 bg-secondary rounded-3xl">
            <form className="rounded-lg text-text  m-4 py-4 px-6 ">
              <label>
                <h1 className="pb-2 text-text text-xl font-medium">
                  Login to Your Account
                </h1>
              </label>

              {error && (
                <div className="bg-red-500 text-white p-3 rounded mb-4">
                  {error}
                </div>
              )}

              <div className="mb-5">
                <label
                  className="block m-1 p-2 text-sm font-mediumtext-white"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full p-2.5 text-primary bg-background rounded-full"
                />
              </div>

              <div className="mb-5">
                <label
                  className="block m-1 p-2 text-sm font-medium text-primary dark:text-white"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-2.5 text-primary bg-background rounded-full"
                />
              </div>

              <div className="mb-5">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-text bg-accent mr-4 mt-2 px-4 py-2 rounded-full w-full hover:font-bold hover:bg-primary"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
