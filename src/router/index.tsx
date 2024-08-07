import { createBrowserRouter, Outlet } from "react-router-dom";
import {
  SignInPage,
  SignUpPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  Dashboard,
  CvDetailsScreen,
  ResendVerificationToken,
  VerifyEmail,
} from "../components/screens";
import { PrivateRoute } from "../components/layout";

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
  {
    path: "/verify-email/:token?",
    element: <VerifyEmail />,
  },
  {
    path: "/resend-verification-token/:token?",
    element: <ResendVerificationToken />,
  },
  {
    path: "/dashboard",
    element: <PrivateRoute element={Outlet} />,
    children: [
      {
        path: "",
        element: <Dashboard />,
        children: [
          {
            path: "cv/:id",
            element: <CvDetailsScreen />,
          },
        ],
      },
    ],
  },
]);
