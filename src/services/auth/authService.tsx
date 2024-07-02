import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { errorSerializer } from "../../serializer";
import { ServiceType } from "../../types";
import {
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  SignInFormValues,
  SignUpFormValues,
} from "./types";

export const useForgotPassword = (
  setError: UseFormSetError<ForgotPasswordFormValues>,
  options?: ServiceType<ForgotPasswordFormValues>
) => {
  return useMutation(
    (forgotPasswordData: ForgotPasswordFormValues) =>
      axios.post(
        "http://localhost:8000/api/auth/forgot-password",
        forgotPasswordData
      ),
    {
      ...options,
      onError: (error: any) => {
        errorSerializer<ForgotPasswordFormValues>(error, setError);
      },
    }
  );
};

export const useResetPassword = (
  setError: UseFormSetError<ResetPasswordFormValues>,
  token?: string,
  options?: ServiceType<ResetPasswordFormValues>
) => {
  return useMutation(
    (resetPasswordData: ResetPasswordFormValues) =>
      axios.post(
        `http://localhost:8000/api/auth/reset-password/${token}`,
        resetPasswordData
      ),
    {
      ...options,
      onError: (error: any) => {
        errorSerializer<ResetPasswordFormValues>(error, setError);
      },
    }
  );
};

export const useSignIn = (
  setError: UseFormSetError<SignInFormValues>,
  options?: ServiceType<SignInFormValues>
) => {
  return useMutation(
    (signInData: SignInFormValues) =>
      axios.post("http://localhost:8000/api/auth/signin", signInData),
    {
      ...options,
      onError: (error: any) => {
        errorSerializer<SignInFormValues>(error, setError);
      },
    }
  );
};

export const useSignUp = (
  setError: UseFormSetError<SignUpFormValues>,
  options?: ServiceType<SignUpFormValues>
) => {
  return useMutation(
    (signInData: SignUpFormValues) =>
      axios.post("http://localhost:8000/api/auth/signup", signInData),
    {
      ...options,
      onError: (error: any) => {
        errorSerializer<SignUpFormValues>(error, setError);
      },
    }
  );
};
