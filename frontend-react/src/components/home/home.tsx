import React from "react";
import "./home.css";
import { Link } from "react-router-dom";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-gray-800 m-4">
          Welcome to the Financial Tool Kit
        </h1>
        <img src="/homepage.png" alt="Tax Calculator Logo" className="logo" />
        <p className="text-lg text-gray-600 mb-4">
          Easily calculate your taxes with our reliable tool.
        </p>

        <Link to="register">
          <button className="text-text bg-accent m-2 px-4 py-2 rounded-full min-w-[100px] hover:font-bold hover:bg-primary">
            Register and Start Calculating!
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
