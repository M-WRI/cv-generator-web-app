import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { generateTranslationKey } from "../utils";

interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
}

export const useSignUp = (setError: UseFormSetError<SignUpFormValues>) => {
  return useMutation(
    (signInData: SignUpFormValues) =>
      axios.post("http://localhost:8000/api/auth/signup", signInData),
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
              setError(location as keyof SignUpFormValues, {
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
