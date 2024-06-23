import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { generateTranslationKey } from "../utils";

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
        if (Array.isArray(error.response?.data)) {
          error.response.data.forEach(
            (err: { errorCode: string; location: string; type: string }) => {
              const { type, errorCode, location } = err;
              const translationKey = generateTranslationKey(
                errorCode,
                location,
                type
              );
              setError(location as keyof ResetPasswordFormValues, {
                type: "manual",
                message: translationKey,
              });
            }
          );
        }
      },
    }
  );
};
