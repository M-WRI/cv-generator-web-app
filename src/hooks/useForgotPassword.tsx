import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { generateTranslationKey } from "../utils";

interface ForgotPasswordFormValues {
  email: string;
}

export const useForgotPassword = (
  setError: UseFormSetError<ForgotPasswordFormValues>
) => {
  return useMutation(
    (forgotPasswordData: ForgotPasswordFormValues) =>
      axios.post(
        "http://localhost:8000/api/auth/forgot-password",
        forgotPasswordData
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
              setError(location as keyof ForgotPasswordFormValues, {
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
