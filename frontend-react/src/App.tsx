import { Outlet } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar/navbar";

function App() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-background">
        <NavBar/>
        <div className="flex-grow">
          <Outlet/>
        </div>
      </div>
      <div className="App">Welcome to Financial Tool kit!</div>
    </>
  );
}

export default App;
