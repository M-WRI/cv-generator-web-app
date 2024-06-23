import { createBrowserRouter } from "react-router-dom";
import {
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  ResetPasswordPage,
} from "../components/screens";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPasswordPage />,
  },
  {
    path: "/reset-password/:token",
    element: <ResetPasswordPage />,
  },
]);
