import axios from "axios";
import { useMutation, UseMutationOptions } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { errorSerializer } from "../serializer";
import { ServiceType } from "../types";

interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
}

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
