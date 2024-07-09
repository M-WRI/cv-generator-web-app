import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Button, InputField } from "../../molecules";
import { ErrorMessage, Text } from "../../atoms";
import { useNavigate } from "react-router-dom";
import { SignUpFormValues, useSignUp } from "../../../services";
import { errorSerializer } from "../../../serializer";

import "./forms.styles.css";

export const SignUpForm: React.FC = () => {
  const methods = useForm<SignUpFormValues>();
  const { t } = useTranslation();
  const navigate = useNavigate();
  const {
    handleSubmit,
    setError,
    formState: { errors },
  } = methods;
  const { signUp, isLoading: signUpIsLoading } = useSignUp({
    options: {
      onSuccess: () => {
        navigate("/");
      },
      onError: (error) => {
        errorSerializer<SignUpFormValues>(error, setError);
      },
    },
  });

  const onSubmit = (data: SignUpFormValues) => {
    signUp({ variables: data });
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
      <form className="form-container" onSubmit={handleSubmit(onSubmit)}>
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
        <Button type="submit" isLoading={signUpIsLoading}>
          {t("signUp.signUpForm.button.submit")}
        </Button>
        {hasGeneralError ? (
          <ErrorMessage
            name="general"
            components={[
              <span
                key="signup"
                className="info-link"
                onClick={() => redirectToSignUp()}
              />,
              <span
                key="forgot-password"
                className="info-link"
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
                className="info-link"
                onClick={() => redirectToSignUp()}
              />,
              <span
                key="forgot-password"
                className="info-link"
                onClick={() => redirectToForgotPassword()}
              />,
            ]}
            fontSize="base"
          />
        )}
      </form>
    </FormProvider>
  );
};
