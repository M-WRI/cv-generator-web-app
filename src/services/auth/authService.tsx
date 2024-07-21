import { IRequestPost, TMutationOptions, TQueryOptions } from "../../types";
import { useFetch, usePost } from "../../api/dataProvider";
import {
  ForgotPasswordFormValues,
  ResendVerificationTokenFormValues,
  ResetPasswordFormValues,
  SignInFormResponse,
  SignInFormValues,
  SignUpFormReponse,
  SignUpFormValues,
} from "./types";
import Cookies from "js-cookie";

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

export const useResendVerificationToken = ({
  options,
}: {
  options: TMutationOptions<ResendVerificationTokenFormValues>;
}) => {
  const { mutate, ...rest } = usePost<ResendVerificationTokenFormValues>({
    options,
    url: "http://localhost:8000/api/auth/resend-verification-token",
  });

  const resendVerificationToken = ({
    variables,
    ...rest
  }: IRequestPost<ResendVerificationTokenFormValues>) => {
    mutate({ ...rest, variables });
  };

  return { resendVerificationToken, ...rest };
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

export const useVerifyEmail = ({
  options,
  token,
}: {
  options?: TQueryOptions<any>;
  token: string;
}) => {
  const { data: verifyEmailData, ...rest } = useFetch<any>({
    url: `http://localhost:8000/api/auth/verify/${token}`,
    queryKey: ["verifyEmail", token],
    options: {
      enabled: false,
      ...options,
    },
  });

  return { verifyEmailData, ...rest };
};

export const useSignOut = () => {
  const signOut = () => {
    Cookies.remove("token");
    window.location.reload();
  };

  return { signOut };
};
