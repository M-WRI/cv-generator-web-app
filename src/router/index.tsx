import { createBrowserRouter } from "react-router-dom";
import { SignInPage, SignUpPage } from "../components/screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
]);
