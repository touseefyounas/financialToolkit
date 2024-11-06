import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/navbar";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <NavBar />
        <div className="flex-grow">
          <Outlet />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
