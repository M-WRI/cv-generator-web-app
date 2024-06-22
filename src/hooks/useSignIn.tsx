import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { generateTranslationKey } from "../utils";

interface SignInFormValues {
  email: string;
  password: string;
}

export const useSignIn = (setError: UseFormSetError<SignInFormValues>) => {
  return useMutation(
    (signInData: SignInFormValues) =>
      axios.post("http://localhost:8000/api/auth/signin", signInData),
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
              setError(location as keyof SignInFormValues, {
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
