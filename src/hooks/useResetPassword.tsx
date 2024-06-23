import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { errorSerializer } from "../serializer";
import { ServiceType } from "../types";

interface ResetPasswordFormValues {
  password: string;
}

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
