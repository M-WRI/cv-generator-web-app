import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { errorSerializer } from "../serializer";

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
        errorSerializer<SignInFormValues>(error, setError);
      },
    }
  );
};
