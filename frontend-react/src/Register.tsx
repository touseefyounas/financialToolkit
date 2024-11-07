
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !username || !password) {
      setError("All fields are required.");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          username,
          password,
        }),
      });

      const data = await response.json();
      if (response.ok) {
        navigate("/login");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Error registering user. Please try again");
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
                  Register Your Account
                </h1>
              </label>

              {error && (
                <div className="bg-red-500 text-white p-3 rounded mb-4">
                  {error}
                </div>
              )}

              <div className="flex md:flex-wrap flex-col md:flex-row md:space-x-4">
                <div className="mb-5 flex-1">
                  <label
                    className="block m-1 p-2 text-sm font-medium text-white"
                    htmlFor="firstName"
                  >
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="block w-full p-2.5 text-primary bg-background rounded-full"
                  />
                </div>
                <div className="mb-5 flex-1">
                  <label
                    className="block m-1 p-2  text-sm font-medium text-white"
                    htmlFor="lastName"
                  >
                    Last Name *
                  </label>
                  <input
                    className="block w-full p-2.5 text-primary bg-background rounded-full"
                    type="text"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
              </div>

              <div className="mb-5">
                <label
                  className="block m-1 p-2 text-sm font-mediumtext-white"
                  htmlFor="email"
                >
                  Email *
                </label>
                <input
                  type="text"
                  name="email"
                  autoComplete="address-line1"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full p-2.5 text-primary bg-background rounded-full"
                />
              </div>

              <div className="mb-5">
                <label
                  className="block m-1 p-2 text-sm font-medium text-white"
                  htmlFor="username"
                >
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  autoComplete="address-line2"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  autoComplete="address-line2"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full p-2.5 text-primary bg-background rounded-full"
                />
              </div>

              <div className="mb-5">
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="text-text bg-accent mr-4 px-4 py-2 mt-2 rounded-full w-full hover:font-bold hover:bg-primary"
                >
                  Register Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
