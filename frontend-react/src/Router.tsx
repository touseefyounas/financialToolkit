import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "./App";
import Register from "./Register";
import Login from "./Login";
import IncomeTax from "./IncomeTax";
import HomePage from "./components/home/home";

const Router = () => {
  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<App />}>
          <Route index element={<HomePage />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="income-tax" element={<IncomeTax />} />
        </Route>
      </>
    )
  );
  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Router;
