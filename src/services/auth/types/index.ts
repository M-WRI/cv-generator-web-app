export interface ForgotPasswordFormValues {
  email: string;
  general?: string;
}

export interface ResendVerificationTokenFormValues {
  email: string;
  general?: string;
}

export interface ResetPasswordFormValues {
  password: string;
  general?: string;
}

export interface SignInFormValues {
  email: string;
  password: string;
  general?: string;
}

export interface SignInFormResponse {
  token: string;
}

export interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
  general?: string;
}

export interface SignUpFormReponse {
  email: string;
  username: string;
}
