import axios from "axios";
import { useMutation } from "react-query";
import { UseFormSetError } from "react-hook-form";
import { errorSerializer } from "../../serializer";
import { IRequestPost, ServiceType, TMutationOptions } from "../../types";
import { usePost } from "../../api/dataProvider";
import {
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  SignInFormValues,
  SignUpFormValues,
} from "./types";

export const useForgotPassword = ({
  options,
}: {
  options: TMutationOptions<ForgotPasswordFormValues>;
}) => {
  const { mutate, ...rest } = usePost<ForgotPasswordFormValues>({
    options,
    url: "http://localhost:8000/api/auth/forgot-password",
  });
  const forgotPassword = ({
    variables,
    ...rest
  }: IRequestPost<ForgotPasswordFormValues>) => {
    mutate({ ...rest, variables });
  };

  return { forgotPassword, ...rest };
};

export const useResetPassword = ({
  options,
  token,
}: {
  options: TMutationOptions<ResetPasswordFormValues>;
  token: string;
}) => {
  const { mutate, ...rest } = usePost<ResetPasswordFormValues>({
    options,
    url: `http://localhost:8000/api/auth/reset-password/${token}`,
  });
  const resetPassword = ({
    variables,
    ...rest
  }: IRequestPost<ResetPasswordFormValues>) => {
    mutate({ ...rest, variables });
  };

  return { resetPassword, ...rest };
};

export const useSignUp = ({
  options,
}: {
  options: TMutationOptions<SignUpFormValues>;
}) => {
  const { mutate, ...rest } = usePost<SignUpFormValues>({
    options,
    url: "http://localhost:8000/api/auth/signup",
  });
  const signUp = ({ variables, ...rest }: IRequestPost<SignUpFormValues>) => {
    mutate({ ...rest, variables });
  };

  return { signUp, ...rest };
};

export const useSignIn = ({
  options,
}: {
  options: TMutationOptions<SignInFormValues>;
}) => {
  const { mutate, ...rest } = usePost<SignInFormValues>({
    options,
    url: "http://localhost:8000/api/auth/signin",
  });

  const signIn = ({ variables, ...rest }: IRequestPost<SignInFormValues>) => {
    mutate({ ...rest, variables });
  };

  return { signIn, ...rest };
};
