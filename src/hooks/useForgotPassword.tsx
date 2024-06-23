import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { errorSerializer } from "../serializer";
import { ServiceType } from "../types";

interface ForgotPasswordFormValues {
  email: string;
}

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
