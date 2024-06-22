import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { useSignUp } from "../../../hooks";
import { InputField } from "../../molecules";
import { Button, ErrorMessage, Text } from "../../atoms";
import { useNavigate } from "react-router-dom";

import "./signUpForm.styles.css";

interface SignUpFormValues {
  email: string;
  username: string;
  password: string;
  general: string;
}

export const SignUpForm: React.FC = () => {
  const methods = useForm<SignUpFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const { mutate } = useSignUp(setError);

  const onSubmit = (data: SignUpFormValues) => {
    mutate(data);
  };

  const redirectToSignUp = () => {
    navigate("/");
  };

  const redirectToForgotPassword = () => {
    navigate("/forgot-password");
  };

  const hasGeneralError = errors?.general && Object.values(errors?.general);

  return (
    <FormProvider {...methods}>
      <form
        className="sign-up-form-container"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputField
          name="email"
          type="email"
          placeholder={t("signUp.signUpForm.placeHolder.email")}
          error={errors?.email ? errors.email : undefined}
        />
        <InputField
          name="username"
          type="text"
          placeholder={t("signUp.signUpForm.placeHolder.username")}
          error={errors?.username ? errors.username : undefined}
        />
        <InputField
          name="password"
          type="password"
          placeholder={t("signUp.signUpForm.placeHolder.password")}
          error={errors?.password ? errors.password : undefined}
        />
        <Button type="submit" action={() => console.log("hi")}>
          {t("signUp.signUpForm.button.submit")}
        </Button>
        {hasGeneralError ? (
          <ErrorMessage
            name="general"
            components={[
              <span
                key="signup"
                className="signup-info-link"
                onClick={() => redirectToSignUp()}
              />,
              <span
                key="forgot-password"
                className="signup-info-link"
                onClick={() => redirectToForgotPassword()}
              />,
            ]}
          />
        ) : (
          <Text
            translationKey="signUp.signUpForm.signInInfo"
            components={[
              <span
                key="signIn"
                className="signup-info-link"
                onClick={() => redirectToSignUp()}
              />,
              <span
                key="forgot-password"
                className="signup-info-link"
                onClick={() => redirectToForgotPassword()}
              />,
            ]}
            fontSize="xs"
          />
        )}
      </form>
    </FormProvider>
  );
};
