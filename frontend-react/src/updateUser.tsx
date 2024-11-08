import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

interface User {
  username: string;
  firstName: string;
  lastName: string;
  email: string;
}

const UpdateUser: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const { userId } = location.state || {};

    if (userId) {
      setUserId(userId);

      const fetchUserData = async () => {
        try {
          const response = await axios.get<User>(
            `http://localhost:8080/user/${userId}`
          );

          if (response.data && response.data) {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setUsername(response.data.username);
          }
        } catch (error: any) {
          setError(error.response.data.message);
        }
      };

      fetchUserData();
    }
  }, [location.state]);

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const updatedUser = { firstName, lastName, email, username };
      const response = await axios.put(
        `http://localhost:8080/user/${userId}`,
        updatedUser
      );

      if (response.status === 200 && response.data) {
        toast.success("User updated successfully!");

        console.log("User updated successfully:", response.data);
        // setTimeout(() => navigate("/login"), 3000);
      } else {
        setError(response.data.message);
      }
    } catch (error: any) {
      setError(
        error.response.data.message ||
          "Error updating user info. Please try again."
      );
      toast.error("Error updating user info. Please try again.");
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete your account?")) {
      try {
        await axios.delete(`http://localhost:8080/user/${userId}`);
        toast.success("User deleted successfully!");
        navigate("/");
      } catch (err) {
        toast.error("Error deleting user. Please try again.");
        setError("Error deleting user");
      }
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
                  Update your account info
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
                    First Name
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
                    Last Name
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
                  Email
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

              <div className="flex justify-center items-center space-x-4">
                <button
                  type="submit"
                  onClick={handleUpdate}
                  className="text-text bg-accent mr-2 px-4 py-2 mt-2 text-white rounded-full hover:bg-primary"
                >
                  Edit Profile
                </button>
                <button
                  type="button"
                  onClick={handleDelete}
                  className="text-text bg-accent mr-2 px-4 py-2 mt-2 text-white rounded-full hover:bg-primary"
                >
                  Delete Profile
                </button>
                <Link to="/income-tax">
                  <button className="text-text bg-primary mr-2 px-4 py-2 mt-2 text-white rounded-full hover:bg-accent">
                    Cancel
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateUser;
