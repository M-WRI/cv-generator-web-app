import { IRequestPost, TMutationOptions } from "../../types";
import { usePost } from "../../api/dataProvider";
import {
  ForgotPasswordFormValues,
  ResetPasswordFormValues,
  SignInFormResponse,
  SignInFormValues,
  SignUpFormReponse,
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
  options: TMutationOptions<SignUpFormValues, SignUpFormReponse>;
}) => {
  const { mutate, ...rest } = usePost<SignUpFormValues, SignUpFormReponse>({
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
  options: TMutationOptions<SignInFormValues, SignInFormResponse>;
}) => {
  const { mutate, ...rest } = usePost<SignInFormValues, SignInFormResponse>({
    options,
    url: "http://localhost:8000/api/auth/signin",
  });

  const signIn = ({ variables, ...rest }: IRequestPost<SignInFormValues>) => {
    mutate({ ...rest, variables });
  };

  return { signIn, ...rest };
};
