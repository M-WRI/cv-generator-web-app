import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { errorSerializer } from "../serializer";

interface ResetPasswordFormValues {
  password: string;
}

export const useResetPassword = (
  setError: UseFormSetError<ResetPasswordFormValues>,
  token?: string
) => {
  return useMutation(
    (resetPasswordData: ResetPasswordFormValues) =>
      axios.post(
        `http://localhost:8000/api/auth/reset-password/${token}`,
        resetPasswordData
      ),
    {
      onError: (error: any) => {
        errorSerializer<ResetPasswordFormValues>(error, setError);
      },
    }
  );
};
