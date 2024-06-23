import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { errorSerializer } from "../serializer";

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
        errorSerializer<SignUpFormValues>(error, setError);
      },
    }
  );
};
