import "./App.css";
import SignInPage from "./pages/SignInPage"; 
import SignUpPage from "./pages/SignUpPage";
import ErrorPage from "./pages/error"; 
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import { NavLink } from "react-router-dom";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";

function App() {
  const myRouter = createBrowserRouter([
    {
      path: "/",
      element: <DashboardPage />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/login",
      element: <SignInPage />,
    },
    {
      path: "/register",
      element: <SignUpPage />,
    },
    {
      path: "/balance",
      element: <BalancePage />,
    },
  ]);

  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
}

export default App;