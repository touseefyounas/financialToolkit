import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar/navbar";
import Footer from "./components/footer/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(false);

  return (
    <>
      <ToastContainer position="top-center" />
      <div className="flex flex-col min-h-screen bg-background">
        <NavBar
          isAuthenticated={isAuthenticated}
          setIsAuthenticated={setIsAuthenticated}
        />

        <div className="flex-grow">
          <Outlet context={[isAuthenticated, setIsAuthenticated]} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
